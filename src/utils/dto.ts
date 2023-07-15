import { JobEntityFragment, QuestionEntityFragment } from '../graphql/query.generated'
import _ from 'lodash'
import { IReport } from '../types/reports'
import {
  IndustryGroupLinkingCollections,
  IndustryLinkedFromArgs,
  IndustryLinkingCollections,
} from '../graphql/type.graphql'
import { IndustryEntityFragment } from '../graphql/industry.generated'
import { IndustryGroupEntityFragment } from '../graphql/industryGroup.generated'
import { Intelligent } from '../types/intelligent'

export const getQuestionsMap = (questions: QuestionEntityFragment[]) => {
  return _.keyBy(questions, 'sys.id')
}

export const getReportData = (reportData: IReport, questions: QuestionEntityFragment[]) => {
  const questionsMap = _.keyBy(questions, 'sys.id')
  if (!reportData) {
    return {
      labels: [],
      values: []
    };
  }
  const mappedData: (QuestionEntityFragment & {
    value: number | string
  })[] = _.compact(
    _.map(reportData, (value: string, key) => {
      if (questionsMap[key]) {
        return {
          ...questionsMap[key],
          value: parseInt(value) - 1,
        }
      }
    }),
  )

  const groupByTypeData = _.groupBy(mappedData, 'type')

  const orderGroupByTypeData = {
    [Intelligent.WORD]: groupByTypeData[Intelligent.WORD],
    [Intelligent.LOGIC]: groupByTypeData[Intelligent.LOGIC],
    [Intelligent.SPACE]: groupByTypeData[Intelligent.SPACE],
    [Intelligent.MOVE]: groupByTypeData[Intelligent.MOVE],
    [Intelligent.MUSIC]: groupByTypeData[Intelligent.MUSIC],
    [Intelligent.INNER]: groupByTypeData[Intelligent.INNER],
    [Intelligent.COMMUNICATION]: groupByTypeData[Intelligent.COMMUNICATION],
  }

  const valuesByType = _.mapValues(orderGroupByTypeData, (group, key) => {
    return (_.sumBy(group, 'value') / group.length) * 25 // 1 2 3 4 5 * 20 = 20% - 100%
  })

  const labels = _.map(valuesByType, (value, key) => mapIntelligentLabel(key))
  const values = _.map(valuesByType, (value, key) => value)

  return {
    labels,
    values,
    valuesByType,
  }
}

const labelMap = {
  [Intelligent.WORD]: 'Ngôn ngữ',
  [Intelligent.LOGIC]: 'Logic',
  [Intelligent.SPACE]: 'Không gian',
  [Intelligent.MOVE]: 'Vận động',
  [Intelligent.MUSIC]: 'Âm nhạc',
  [Intelligent.INNER]: 'Nội tâm',
  [Intelligent.COMMUNICATION]: 'Giao tiếp',
}
const mapIntelligentLabel = (label: string) => {
  return labelMap[label] || label;
}
export const getTopJobs = (jobs: JobEntityFragment[], valuesByType, options) => {
  const { filter } = options || {}

  if (!valuesByType) {
    return {
      values: [],
      labels: [],
    }
  }
  const filterdJobs = _.filter(jobs, (job) => {
    const { industry, industryGroup } = filter || {}

    if (industry) {
      return !!_.find(job.linkedFrom.industryCollection.items, (item) => item.slug === industry)
    }

    return true
  })

  const valueByJobs = _.map(filterdJobs, (job) => {
    const { logic, move, music, communication, inner, space, title, word } = job

    const total = _.sum([logic, move, music, communication, inner, space, word])

    const totalValue = _.sum([
      logic * valuesByType.logic || 0,
      move * valuesByType.move || 0,
      music * valuesByType.music || 0,
      communication * valuesByType.communication || 0,
      inner * valuesByType.inner || 0,
      space * valuesByType.space || 0,
      word * valuesByType.word || 0,
    ])
    return {
      label: job.title,
      value: totalValue / total,
    }
  })

  const sorted = _.take(_.orderBy(valueByJobs, 'value', 'desc'), 5)
  const labels = _.map(sorted, (item) => item.label)
  const values = _.map(sorted, (item) => item.value)
  return {
    labels,
    values,
  }
}

type IEntry = IndustryEntityFragment | IndustryGroupEntityFragment
export const convertToSelectOption = (entry: IEntry) => {
  if (entry.__typename === 'Industry') {
    return {
      label: entry.title,
      value: entry.slug,
      industryGroups: _.map(entry.linkedFrom?.industryGroupCollection.items, (item) => item.slug),
    }
  }

  return {
    label: entry.title,
    value: entry.slug,
  }
}

export const convertToSelectOptions = (entries: IEntry[]) => {
  return _.map(entries, (entry) => convertToSelectOption(entry))
}

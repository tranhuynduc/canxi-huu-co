import _ from 'lodash'
import { LinkedAnswerEntityFragment, LinkedQuestionEntityFragment } from '../graphql/linkedQuestion.generated'

export const buildLinkedQuestions = (linkedQuestions: LinkedQuestionEntityFragment[], id?: string) => {
  const startQuestion = _.find(linkedQuestions, (question) => {
    if (id) {
      return question.sys.id === id
    }

    return question.isStart
  })
  if (!startQuestion) {
    return null
  }

  const questionItem = buildQuestion(startQuestion)
  return questionItem
}

export type ILinkedQuestion = LinkedQuestionEntityFragment & {
  id: string
  answers: ILinkedAnswer[]
}
const buildQuestion = (question: LinkedQuestionEntityFragment): ILinkedQuestion => {
  const answers = _.map(question.answersCollection?.items, (answer) => {
    return buildAnswer(answer)
  })

  const questionItem = {
    ...question,
    id: question.sys.id,
    answers,
  }

  return questionItem
}

type ILinkedAnswer = LinkedAnswerEntityFragment & {
  id: string
  nextQuestionId: string
}
const buildAnswer = (answer: LinkedAnswerEntityFragment): ILinkedAnswer => {
  return {
    ...answer,
    id: answer.id || answer.slug || answer.sys.id,
    nextQuestionId: !answer.isEnd ? answer.nextQuestion?.sys?.id : null,
  }
}

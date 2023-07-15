'use client'
import { Button, Form, Input, Select } from 'antd'
import _ from 'lodash'
import React, { useMemo, useState } from 'react'
import { IndustryEntityFragment } from '../../../graphql/industry.generated'
import { IndustryGroupEntityFragment } from '../../../graphql/industryGroup.generated'
import { JobEntityFragment, QuestionEntityFragment } from '../../../graphql/query.generated'
import { getReport } from '../../../services/reports'
import { IReport } from '../../../types/reports'
import { convertToSelectOptions, getReportData, getTopJobs } from '../../../utils/dto'
import ReportSection from './ReportSection'

interface InnerProps {
  questions: QuestionEntityFragment[]
  jobs: JobEntityFragment[]
  industries: IndustryEntityFragment[]
  industryGroups: IndustryGroupEntityFragment[]
}

const Inner: React.FC<InnerProps> = (props) => {
  const { questions, jobs, industries, industryGroups } = props
  const [reportData, setData] = useState<IReport>()
  const [filter, setFilter] = useState<{ industry?: string; industryGroup?: string }>()
  const [name, setName] = useState('')
  const [form] = Form.useForm();

  const { values, labels, valuesByType } = getReportData(reportData, questions)
  const { values: jobValues, labels: jobLabels } = getTopJobs(jobs, valuesByType, {
    filter,
  })

  const industryOptions = useMemo(() => convertToSelectOptions(industries), [industries])
  const industryGroupOptions = useMemo(() => convertToSelectOptions(industryGroups), [industryGroups])

  const handleFinish = async (values) => {
    const { result } = await getReport(values.name)
    setName(values.name)
    setFilter({
      industry: values.industry,
      industryGroup: values.industryGroup,
    })
    setData(result)
  }

  const handleIndustryGroupChange = () => {
    form.resetFields(['industry'])
  }

  return (
    <>
      <Form onFinish={handleFinish} className="max-w-[400px] mb-8" form={form}>
        <Form.Item name="name" label="Nick name">
          <Input placeholder="Input your nick name"></Input>
        </Form.Item>
        <Form.Item label="Nhóm Ngành" name="industryGroup">
          <Select
            onChange={handleIndustryGroupChange}
            allowClear
            style={{ width: '100%' }}
            placeholder="Chọn nhóm ngành"
            options={industryGroupOptions}
          />
        </Form.Item>
        <Form.Item shouldUpdate dependencies={['industryGroup']}>
          {({ getFieldValue, setFieldValue }) => {
            const industryGroup = getFieldValue('industryGroup')
            let filteredIndustryOptions = industryOptions
            if (industryGroup) {
              filteredIndustryOptions = _.filter(industryOptions, (industryOption) => {
                return _.includes(industryOption.industryGroups, industryGroup)
              })
            }

            return (
              <Form.Item label="Ngành" name="industry">
                <Select
                  allowClear
                  style={{ width: '100%' }}
                  placeholder="CHọn ngành"
                  options={filteredIndustryOptions}
                />
              </Form.Item>
            )
          }}
        </Form.Item>

        <Form.Item noStyle>
          <Button htmlType="submit" type="primary">
            Lấy kết quả
          </Button>
        </Form.Item>
      </Form>

      <ReportSection
        name={name}
        jobLabels={jobLabels}
        jobValues={jobValues}
        reportLabels={labels}
        reportValues={values}
      />
    </>
  )
}

export default Inner

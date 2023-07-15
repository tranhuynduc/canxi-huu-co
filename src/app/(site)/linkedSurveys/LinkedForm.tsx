'use client'

import { Alert, Button, Form, Input, Radio, Space, Typography } from 'antd'
import React, { useEffect, useState } from 'react'
import { LinkedQuestionEntityFragment } from '../../../graphql/linkedQuestion.generated'
import _, { rest } from 'lodash'
import { ILinkedQuestion, buildLinkedQuestions } from '../../../utils/questionsHelper'
import LinkedQuestion from './LinkedQuestion'

interface LinkedFormProps {
  linkedQuestions: LinkedQuestionEntityFragment[]
}

const LinkedForm: React.FC<LinkedFormProps> = ({ linkedQuestions }) => {
  const [currentQuestion, setCurrentQuestion] = useState<ILinkedQuestion>()
  const [isEnd, setIsEnd] = useState(false)
  const [form] = Form.useForm()
  useEffect(() => {
    const question = buildLinkedQuestions(linkedQuestions)
    setCurrentQuestion(question)
  }, [linkedQuestions])

  const handleFinish = (values) => {
    const { answerId } = values
    const answer = currentQuestion.answers.find((answer) => answer.id === answerId)
    const isEnd = answer.isEnd
    const nextQuestionId = answer.nextQuestionId

    if (!nextQuestionId || isEnd) {
      setIsEnd(true)
      return
    }

    const question = buildLinkedQuestions(linkedQuestions, nextQuestionId)

    setCurrentQuestion({ ...question })
  }

  if (!currentQuestion) {
    return null
  }

  if (isEnd) {
    return <div>Đã hoàn thành khảo sát</div>
  }

  return (
    <Form className="my-10" onFinish={handleFinish} form={form}>
      <Form.Item name="name" label="Name">
        <Input placeholder="Input your name"></Input>
      </Form.Item>
      <LinkedQuestion question={currentQuestion}></LinkedQuestion>
      <Button type="primary" htmlType="submit">
        Next
      </Button>
    </Form>
  )
}

export default LinkedForm

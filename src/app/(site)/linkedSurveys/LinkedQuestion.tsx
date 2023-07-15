'use client'
import { Typography, Form, Radio, Space } from 'antd'
import _, { rest } from 'lodash'
import React from 'react'
import { motion } from 'framer-motion'
import { ILinkedQuestion } from '../../../utils/questionsHelper'

const LinkedQuestion = ({ question }: { question: ILinkedQuestion }) => {
  return (
    <motion.div
      initial={{ x: '100vw', opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: '100vw', opacity: 0 }}
      transition={{
        type: 'spring',
        stiffness: 260,
        damping: 20,
      }}
      key={Math.random()}
    >
      <Typography.Title>{question.title}</Typography.Title>
      <Form.Item name="answerId">
        <Radio.Group {...rest} name={question.title}>
          <Space direction="vertical">
            {_.map(question.answers, (answer) => {
              return <Radio value={answer.id}>{answer.title}</Radio>
            })}
          </Space>
        </Radio.Group>
      </Form.Item>
    </motion.div>
  )
}

export default LinkedQuestion

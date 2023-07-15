'use client'

import { Alert, Button, Form, Input, Radio, Slider, Space, Typography, message } from 'antd'
import React, { useEffect, useState } from 'react'
import AnswerItem from './AnswerItem'
import { addReport, getReports } from '../services/reports'
import { rest, map, filter } from 'lodash'

const CommonForm = ({ items }) => {
  const [messageApi, contextHolder] = message.useMessage()
  const [userId, setUserId] = useState('')

  const handleFinish = async (values) => {
    try {
      const { userId } = await addReport(values)
      setUserId(userId)
      messageApi.open({
        type: 'success',
        content: `Chúc mừng bạn đã hoàn thành bài khảo sát. Id của bạn là: ${userId}`,
      })
    } catch (e) {
      const message = e.message || 'Có lỗi xảy ra, vui lòng thử lại sau'

      messageApi.open({
        type: 'error',
        content: message,
      })
    }
  }

  return (
    <Form
      onFinish={handleFinish}
      layout="vertical"
      className="my-10"
      name="survey-form"
      scrollToFirstError={true}
      initialValues={{
        want: 'fast',
      }}
      autoComplete="off"
    >
      {contextHolder}
      {userId && <Typography className="my-4">User Id của bạn: {userId}</Typography>}
      <Form.Item
        name="name"
        label="Nick name hoặc tên của bạn"
        required
        rules={[
          {
            required: true,
            message: 'Vui lòng nhập tên',
          },
        ]}
      >
        <Input placeholder="Input your name"></Input>
      </Form.Item>
      <Alert
        className="mb-4"
        message="Nhấn phím Tab để qua câu tiếp theo, nhấn phím mũi tên để chọn câu trả lời"
        type="info"
      />
      <Form.Item label="Chọn bộ câu hỏi" name="want">
        <Radio.Group {...rest} name="want">
          <Space direction="horizontal">
            <Radio value="fast">Nhanh</Radio>
            <Radio value="standard">TIêu chuẩn</Radio>
            <Radio value="accurate">Chính xác</Radio>
          </Space>
        </Radio.Group>
      </Form.Item>
      <Form.Item noStyle shouldUpdate={(prev, next) => prev.want !== next.want}>
        {({ getFieldValue }) => {
          const want = getFieldValue('want')
          const filteredItems = filter(items, (item) => {
            console.log('item', item.want)
            if (want === 'fast') {
              return item.want === 'fast'
            }

            if (want === 'standard') {
              return item.want === 'standard' || item.want === 'fasy'
            }

            return true
          })

          return (
            <div>
              {filteredItems?.map((item, index: number) => {
                return (
                  <div key={index} className="mb-6" style={{ marginBottom: 20 }}>
                    <AnswerItem slug={item.slug} {...item} title={`${index + 1}. ${item.title}`} />
                  </div>
                )
              })}
            </div>
          )
        }}
      </Form.Item>

      <Form.Item
        name="name"
        label="Name"
        required
        rules={[
          {
            required: true,
            message: 'Vui lòng nhập tên',
          },
        ]}
      >
        <Input placeholder="Input your name"></Input>
      </Form.Item>
      <Form.Item noStyle>
        <Button htmlType="submit" type="primary">
          Submit
        </Button>
      </Form.Item>
    </Form>
  )
}

export default CommonForm

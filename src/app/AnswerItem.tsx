import { Radio, Space, Input, Form, Slider } from 'antd'
import React from 'react'

interface AnswerItemPops {
  slug: string
  sys: {
    id: string
  }
  title: string
}
const AnswerItem: React.FC<AnswerItemPops> = ({ sys, slug, title, ...rest }) => {
  return (
    <Form.Item label={title} {...rest} name={sys?.id} required rules={[{ required: true, message: 'Vui lòng chọn câu trả lời'}]}>
      <Radio.Group {...rest} name={sys?.id}>
        <Space direction="vertical">
          <Radio value={1}>Không bao giờ</Radio>
          <Radio value={2}>Hiếm khi</Radio>
          <Radio value={3}>Thỉnh thoảng</Radio>
          <Radio value={4}>Nhiều khi</Radio>
          <Radio value={5}>Luôn luôn</Radio>
        </Space>
      </Radio.Group>
    </Form.Item>
  )
}

export default AnswerItem

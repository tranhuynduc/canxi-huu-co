'use client'
import { Grid, Image, Typography } from 'antd'
import _ from 'lodash'

const ProductList = (props) => {
  const { products } = props
  return (
    <>
      <div className="grid grid-cols-3 gap-4">
        {_.map(products, (product, index) => {
          return (
            <div key={index}>
              <Typography.Title>{product.title}</Typography.Title>
              <Image src={product.image.url || ''} alt={product.title} />
              <Typography.Paragraph>{product.description}</Typography.Paragraph>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default ProductList

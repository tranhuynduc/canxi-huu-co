import Image from 'next/image'
import {
  GetProductsDocument,
  GetProductsQueryResponse,
  GetProductsQueryVariables,
} from '../../../graphql/product.generated'
import { getClient } from '../../../services/graphql'
import _ from 'lodash'
import ProductList from './Inner';

export const revalidate = 10

const ProductsPage = async () => {
  const response = await getClient().query<GetProductsQueryResponse, GetProductsQueryVariables>({
    query: GetProductsDocument,
    fetchPolicy: 'no-cache',
  })
  const products = response.data?.productCollection?.items || []
  return (
    <>
      <ProductList products={products}/>
    </>
  )
}

export default ProductsPage

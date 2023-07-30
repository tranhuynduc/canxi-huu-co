import { useGetProductsQuery } from '../../../codegen/graphql/product.generated';
import ProductList from './Inner';

export const revalidate = 10

const ProductsPage = async () => {
  const response = await useGetProductsQuery.fetcher()()
  const products = response?.productCollection?.items || []
  return (
    <>
      <ProductList products={products}/>
    </>
  )
}

export default ProductsPage

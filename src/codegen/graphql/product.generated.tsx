import * as Types from './type.graphql'

import { useQuery, UseQueryOptions } from '@tanstack/react-query'
import { customFetcher } from './customFetcher'
export type GetProductsQueryVariables = Types.Exact<{ [key: string]: never }>

export type GetProductsQueryResponse = {
  __typename?: 'Query'
  productCollection?: {
    __typename?: 'ProductCollection'
    items: Array<{
      __typename?: 'Product'
      title?: string
      description?: string
      image?: { __typename?: 'Asset'; url?: string }
    }>
  }
}

export const GetProductsDocument = `
    query GetProducts {
  productCollection {
    items {
      title
      description
      image {
        url
      }
    }
  }
}
    `
export const useGetProductsQuery = <TData = GetProductsQueryResponse, TError = unknown>(
  variables?: GetProductsQueryVariables,
  options?: UseQueryOptions<GetProductsQueryResponse, TError, TData>,
) =>
  useQuery<GetProductsQueryResponse, TError, TData>(
    variables === undefined ? ['GetProducts'] : ['GetProducts', variables],
    customFetcher<GetProductsQueryResponse, GetProductsQueryVariables>(GetProductsDocument, variables),
    options,
  )

useGetProductsQuery.getKey = (variables?: GetProductsQueryVariables) =>
  variables === undefined ? ['GetProducts'] : ['GetProducts', variables]
useGetProductsQuery.fetcher = (variables?: GetProductsQueryVariables, options?: RequestInit['headers']) =>
  customFetcher<GetProductsQueryResponse, GetProductsQueryVariables>(GetProductsDocument, variables, options)

import * as Types from './type.graphql'

import { useQuery, UseQueryOptions } from '@tanstack/react-query'
import { customFetcher } from './customFetcher'
export type GetGenericPagesQueryVariables = Types.Exact<{
  slug: Types.Scalars['String']
}>

export type GetGenericPagesQueryResponse = {
  __typename?: 'Query'
  genericPageCollection?: {
    __typename?: 'GenericPageCollection'
    items: Array<{
      __typename?: 'GenericPage'
      title?: string
      slug?: string
      body?: {
        __typename?: 'GenericPageBody'
        json: any
        links: {
          __typename?: 'GenericPageBodyLinks'
          entries: {
            __typename?: 'GenericPageBodyEntries'
            block: Array<
              | { __typename: 'GenericPage'; title?: string; slug?: string; sys: { __typename?: 'Sys'; id: string } }
              | { __typename: 'Product'; sys: { __typename?: 'Sys'; id: string } }
            >
          }
          assets: {
            __typename?: 'GenericPageBodyAssets'
            block: Array<{ __typename?: 'Asset'; sys: { __typename?: 'Sys'; id: string } }>
          }
        }
      }
    }>
  }
}

export const GetGenericPagesDocument = `
    query GetGenericPages($slug: String!) {
  genericPageCollection(where: {slug: $slug}, limit: 1) {
    items {
      title
      slug
      body {
        json
        links {
          entries {
            block {
              __typename
              sys {
                id
              }
              __typename
              ... on GenericPage {
                title
                slug
              }
            }
          }
          assets {
            block {
              sys {
                id
              }
            }
          }
        }
      }
    }
  }
}
    `
export const useGetGenericPagesQuery = <TData = GetGenericPagesQueryResponse, TError = unknown>(
  variables: GetGenericPagesQueryVariables,
  options?: UseQueryOptions<GetGenericPagesQueryResponse, TError, TData>,
) =>
  useQuery<GetGenericPagesQueryResponse, TError, TData>(
    ['GetGenericPages', variables],
    customFetcher<GetGenericPagesQueryResponse, GetGenericPagesQueryVariables>(GetGenericPagesDocument, variables),
    options,
  )

useGetGenericPagesQuery.getKey = (variables: GetGenericPagesQueryVariables) => ['GetGenericPages', variables]
useGetGenericPagesQuery.fetcher = (variables: GetGenericPagesQueryVariables, options?: RequestInit['headers']) =>
  customFetcher<GetGenericPagesQueryResponse, GetGenericPagesQueryVariables>(
    GetGenericPagesDocument,
    variables,
    options,
  )

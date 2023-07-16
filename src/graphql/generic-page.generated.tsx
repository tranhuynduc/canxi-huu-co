import * as Types from './type.graphql';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;

export const GetGenericPagesDocument = gql`
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
    `;

/**
 * __useGetGenericPagesQuery__
 *
 * To run a query within a React component, call `useGetGenericPagesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetGenericPagesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetGenericPagesQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useGetGenericPagesQuery(baseOptions: Apollo.QueryHookOptions<GetGenericPagesQueryResponse, GetGenericPagesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetGenericPagesQueryResponse, GetGenericPagesQueryVariables>(GetGenericPagesDocument, options);
      }
export function useGetGenericPagesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetGenericPagesQueryResponse, GetGenericPagesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetGenericPagesQueryResponse, GetGenericPagesQueryVariables>(GetGenericPagesDocument, options);
        }
export type GetGenericPagesQueryHookResult = ReturnType<typeof useGetGenericPagesQuery>;
export type GetGenericPagesLazyQueryHookResult = ReturnType<typeof useGetGenericPagesLazyQuery>;
export type GetGenericPagesQueryResult = Apollo.QueryResult<GetGenericPagesQueryResponse, GetGenericPagesQueryVariables>;
export type GetGenericPagesQueryVariables = Types.Exact<{
  slug: Types.Scalars['String'];
}>;


export type GetGenericPagesQueryResponse = { __typename?: 'Query', genericPageCollection?: { __typename?: 'GenericPageCollection', items: Array<{ __typename?: 'GenericPage', title?: string, slug?: string, body?: { __typename?: 'GenericPageBody', json: any, links: { __typename?: 'GenericPageBodyLinks', entries: { __typename?: 'GenericPageBodyEntries', block: Array<{ __typename: 'GenericPage', title?: string, slug?: string, sys: { __typename?: 'Sys', id: string } } | { __typename: 'Product', sys: { __typename?: 'Sys', id: string } }> }, assets: { __typename?: 'GenericPageBodyAssets', block: Array<{ __typename?: 'Asset', sys: { __typename?: 'Sys', id: string } }> } } } }> } };

import * as Types from './type.graphql';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export const IndustryEntityFragmentDoc = gql`
    fragment IndustryEntity on Industry {
  title
  slug
  linkedFrom {
    industryGroupCollection {
      items {
        title
        slug
      }
    }
  }
}
    `;
export const GetIndustriesDocument = gql`
    query GetIndustries {
  industryCollection {
    items {
      ...IndustryEntity
    }
  }
}
    ${IndustryEntityFragmentDoc}`;

/**
 * __useGetIndustriesQuery__
 *
 * To run a query within a React component, call `useGetIndustriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetIndustriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetIndustriesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetIndustriesQuery(baseOptions?: Apollo.QueryHookOptions<GetIndustriesQueryResponse, GetIndustriesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetIndustriesQueryResponse, GetIndustriesQueryVariables>(GetIndustriesDocument, options);
      }
export function useGetIndustriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetIndustriesQueryResponse, GetIndustriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetIndustriesQueryResponse, GetIndustriesQueryVariables>(GetIndustriesDocument, options);
        }
export type GetIndustriesQueryHookResult = ReturnType<typeof useGetIndustriesQuery>;
export type GetIndustriesLazyQueryHookResult = ReturnType<typeof useGetIndustriesLazyQuery>;
export type GetIndustriesQueryResult = Apollo.QueryResult<GetIndustriesQueryResponse, GetIndustriesQueryVariables>;
export type IndustryEntityFragment = { __typename?: 'Industry', title?: string, slug?: string, linkedFrom?: { __typename?: 'IndustryLinkingCollections', industryGroupCollection?: { __typename?: 'IndustryGroupCollection', items: Array<{ __typename?: 'IndustryGroup', title?: string, slug?: string }> } } };

export type GetIndustriesQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetIndustriesQueryResponse = { __typename?: 'Query', industryCollection?: { __typename?: 'IndustryCollection', items: Array<{ __typename?: 'Industry', title?: string, slug?: string, linkedFrom?: { __typename?: 'IndustryLinkingCollections', industryGroupCollection?: { __typename?: 'IndustryGroupCollection', items: Array<{ __typename?: 'IndustryGroup', title?: string, slug?: string }> } } }> } };

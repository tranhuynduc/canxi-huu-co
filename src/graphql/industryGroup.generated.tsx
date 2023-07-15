import * as Types from './type.graphql';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export const IndustryGroupEntityFragmentDoc = gql`
    fragment IndustryGroupEntity on IndustryGroup {
  title
  slug
}
    `;
export const GetIndustryGroupsDocument = gql`
    query GetIndustryGroups {
  industryGroupCollection {
    items {
      ...IndustryGroupEntity
    }
  }
}
    ${IndustryGroupEntityFragmentDoc}`;

/**
 * __useGetIndustryGroupsQuery__
 *
 * To run a query within a React component, call `useGetIndustryGroupsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetIndustryGroupsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetIndustryGroupsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetIndustryGroupsQuery(baseOptions?: Apollo.QueryHookOptions<GetIndustryGroupsQueryResponse, GetIndustryGroupsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetIndustryGroupsQueryResponse, GetIndustryGroupsQueryVariables>(GetIndustryGroupsDocument, options);
      }
export function useGetIndustryGroupsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetIndustryGroupsQueryResponse, GetIndustryGroupsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetIndustryGroupsQueryResponse, GetIndustryGroupsQueryVariables>(GetIndustryGroupsDocument, options);
        }
export type GetIndustryGroupsQueryHookResult = ReturnType<typeof useGetIndustryGroupsQuery>;
export type GetIndustryGroupsLazyQueryHookResult = ReturnType<typeof useGetIndustryGroupsLazyQuery>;
export type GetIndustryGroupsQueryResult = Apollo.QueryResult<GetIndustryGroupsQueryResponse, GetIndustryGroupsQueryVariables>;
export type IndustryGroupEntityFragment = { __typename?: 'IndustryGroup', title?: string, slug?: string };

export type GetIndustryGroupsQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetIndustryGroupsQueryResponse = { __typename?: 'Query', industryGroupCollection?: { __typename?: 'IndustryGroupCollection', items: Array<{ __typename?: 'IndustryGroup', title?: string, slug?: string }> } };

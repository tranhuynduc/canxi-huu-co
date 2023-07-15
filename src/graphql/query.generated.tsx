import * as Types from './type.graphql';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export const QuestionEntityFragmentDoc = gql`
    fragment QuestionEntity on Question {
  title
  answers
  type
  slug
  want
  sys {
    id
  }
}
    `;
export const JobEntityFragmentDoc = gql`
    fragment JobEntity on Jobs {
  title
  logic
  move
  music
  space
  inner
  communication
  word
  linkedFrom {
    industryCollection(limit: 10) {
      items {
        title
        slug
      }
    }
  }
}
    `;
export const GetQuestionsDocument = gql`
    query GetQuestions {
  questionCollection {
    items {
      ...QuestionEntity
    }
  }
}
    ${QuestionEntityFragmentDoc}`;

/**
 * __useGetQuestionsQuery__
 *
 * To run a query within a React component, call `useGetQuestionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetQuestionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetQuestionsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetQuestionsQuery(baseOptions?: Apollo.QueryHookOptions<GetQuestionsQueryResponse, GetQuestionsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetQuestionsQueryResponse, GetQuestionsQueryVariables>(GetQuestionsDocument, options);
      }
export function useGetQuestionsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetQuestionsQueryResponse, GetQuestionsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetQuestionsQueryResponse, GetQuestionsQueryVariables>(GetQuestionsDocument, options);
        }
export type GetQuestionsQueryHookResult = ReturnType<typeof useGetQuestionsQuery>;
export type GetQuestionsLazyQueryHookResult = ReturnType<typeof useGetQuestionsLazyQuery>;
export type GetQuestionsQueryResult = Apollo.QueryResult<GetQuestionsQueryResponse, GetQuestionsQueryVariables>;
export const GetJobsDocument = gql`
    query GetJobs {
  jobsCollection {
    items {
      ...JobEntity
    }
  }
}
    ${JobEntityFragmentDoc}`;

/**
 * __useGetJobsQuery__
 *
 * To run a query within a React component, call `useGetJobsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetJobsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetJobsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetJobsQuery(baseOptions?: Apollo.QueryHookOptions<GetJobsQueryResponse, GetJobsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetJobsQueryResponse, GetJobsQueryVariables>(GetJobsDocument, options);
      }
export function useGetJobsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetJobsQueryResponse, GetJobsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetJobsQueryResponse, GetJobsQueryVariables>(GetJobsDocument, options);
        }
export type GetJobsQueryHookResult = ReturnType<typeof useGetJobsQuery>;
export type GetJobsLazyQueryHookResult = ReturnType<typeof useGetJobsLazyQuery>;
export type GetJobsQueryResult = Apollo.QueryResult<GetJobsQueryResponse, GetJobsQueryVariables>;
export type QuestionEntityFragment = { __typename?: 'Question', title?: string, answers?: Array<string>, type?: string, slug?: string, want?: string, sys: { __typename?: 'Sys', id: string } };

export type GetQuestionsQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetQuestionsQueryResponse = { __typename?: 'Query', questionCollection?: { __typename?: 'QuestionCollection', items: Array<{ __typename?: 'Question', title?: string, answers?: Array<string>, type?: string, slug?: string, want?: string, sys: { __typename?: 'Sys', id: string } }> } };

export type JobEntityFragment = { __typename?: 'Jobs', title?: string, logic?: number, move?: number, music?: number, space?: number, inner?: number, communication?: number, word?: number, linkedFrom?: { __typename?: 'JobsLinkingCollections', industryCollection?: { __typename?: 'IndustryCollection', items: Array<{ __typename?: 'Industry', title?: string, slug?: string }> } } };

export type GetJobsQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetJobsQueryResponse = { __typename?: 'Query', jobsCollection?: { __typename?: 'JobsCollection', items: Array<{ __typename?: 'Jobs', title?: string, logic?: number, move?: number, music?: number, space?: number, inner?: number, communication?: number, word?: number, linkedFrom?: { __typename?: 'JobsLinkingCollections', industryCollection?: { __typename?: 'IndustryCollection', items: Array<{ __typename?: 'Industry', title?: string, slug?: string }> } } }> } };

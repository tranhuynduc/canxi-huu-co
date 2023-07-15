import * as Types from './type.graphql';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export const LinkedAnswerEntityFragmentDoc = gql`
    fragment LinkedAnswerEntity on LinkedAnswer {
  title
  isEnd
  slug
  id
  sys {
    id
  }
  nextQuestion {
    title
    sys {
      id
    }
  }
}
    `;
export const LinkedQuestionEntityFragmentDoc = gql`
    fragment LinkedQuestionEntity on LinkedQuestion {
  title
  isStart
  slug
  answersCollection(limit: 10) {
    items {
      ...LinkedAnswerEntity
    }
  }
  sys {
    id
  }
}
    ${LinkedAnswerEntityFragmentDoc}`;
export const GetLinkedQuestionsDocument = gql`
    query GetLinkedQuestions {
  linkedQuestionCollection {
    items {
      ...LinkedQuestionEntity
    }
  }
}
    ${LinkedQuestionEntityFragmentDoc}`;

/**
 * __useGetLinkedQuestionsQuery__
 *
 * To run a query within a React component, call `useGetLinkedQuestionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetLinkedQuestionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetLinkedQuestionsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetLinkedQuestionsQuery(baseOptions?: Apollo.QueryHookOptions<GetLinkedQuestionsQueryResponse, GetLinkedQuestionsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetLinkedQuestionsQueryResponse, GetLinkedQuestionsQueryVariables>(GetLinkedQuestionsDocument, options);
      }
export function useGetLinkedQuestionsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetLinkedQuestionsQueryResponse, GetLinkedQuestionsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetLinkedQuestionsQueryResponse, GetLinkedQuestionsQueryVariables>(GetLinkedQuestionsDocument, options);
        }
export type GetLinkedQuestionsQueryHookResult = ReturnType<typeof useGetLinkedQuestionsQuery>;
export type GetLinkedQuestionsLazyQueryHookResult = ReturnType<typeof useGetLinkedQuestionsLazyQuery>;
export type GetLinkedQuestionsQueryResult = Apollo.QueryResult<GetLinkedQuestionsQueryResponse, GetLinkedQuestionsQueryVariables>;
export type LinkedAnswerEntityFragment = { __typename?: 'LinkedAnswer', title?: string, isEnd?: boolean, slug?: string, id?: string, sys: { __typename?: 'Sys', id: string }, nextQuestion?: { __typename?: 'LinkedQuestion', title?: string, sys: { __typename?: 'Sys', id: string } } };

export type LinkedQuestionEntityFragment = { __typename?: 'LinkedQuestion', title?: string, isStart?: boolean, slug?: string, answersCollection?: { __typename?: 'LinkedQuestionAnswersCollection', items: Array<{ __typename?: 'LinkedAnswer', title?: string, isEnd?: boolean, slug?: string, id?: string, sys: { __typename?: 'Sys', id: string }, nextQuestion?: { __typename?: 'LinkedQuestion', title?: string, sys: { __typename?: 'Sys', id: string } } }> }, sys: { __typename?: 'Sys', id: string } };

export type GetLinkedQuestionsQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetLinkedQuestionsQueryResponse = { __typename?: 'Query', linkedQuestionCollection?: { __typename?: 'LinkedQuestionCollection', items: Array<{ __typename?: 'LinkedQuestion', title?: string, isStart?: boolean, slug?: string, answersCollection?: { __typename?: 'LinkedQuestionAnswersCollection', items: Array<{ __typename?: 'LinkedAnswer', title?: string, isEnd?: boolean, slug?: string, id?: string, sys: { __typename?: 'Sys', id: string }, nextQuestion?: { __typename?: 'LinkedQuestion', title?: string, sys: { __typename?: 'Sys', id: string } } }> }, sys: { __typename?: 'Sys', id: string } }> } };

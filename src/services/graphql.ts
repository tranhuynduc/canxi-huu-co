import { ApolloClient, NormalizedCacheObject } from "@apollo/client"
import { createApolloClient } from "./apolloClient"
import possibleTypes from '../apollo/possibleTypes.json'
let apolloClient: ApolloClient<NormalizedCacheObject> | undefined

function isServerSide() {
  return typeof window === 'undefined'
}

export const getClient = () => {
  if (!apolloClient || isServerSide()) {
    apolloClient = createApolloClient({
      uri: process.env.NEXT_PUBLIC_CONTENTFUL_GRAPHQL_ENDPOINT,
      accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
      possibleTypes: possibleTypes.possibleTypes,
    })
  }

  return apolloClient
}
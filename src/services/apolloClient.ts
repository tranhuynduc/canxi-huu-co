import { ApolloClient, from, HttpLink, InMemoryCache, PossibleTypesMap } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'

type Params = {
  uri?: string
  accessToken?: string
  possibleTypes: PossibleTypesMap
}

export function createApolloClient({ uri, possibleTypes, accessToken }: Params) {
  const httpLink = new HttpLink({
    uri,
    // credentials: 'include',
  })

  const authLink = setContext((_, { headers }) => {
    const modifiedHeader = {
      headers: {
        ...(accessToken && { authorization: `Bearer ${accessToken}` }),
        ...headers,
      },
    }
    return modifiedHeader
  })

  return new ApolloClient({
    defaultOptions: {
      query: {
        fetchPolicy: 'no-cache',
      },
    },
    link: from([authLink, httpLink]),
    cache: new InMemoryCache({ possibleTypes }),
    queryDeduplication: true,
  })
}

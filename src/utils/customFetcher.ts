
export const fetchConfig = {
  endpoint: process.env.NEXT_PUBLIC_CONTENTFUL_GRAPHQL_ENDPOINT as string,
  params: {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN}`,
    },
  },
  previewParams: {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN}`,
    },
  },
}

export function customFetcher<TData, TVariables extends object & { preview?: boolean }>(
  query: string,
  variables?: TVariables,
  options?: RequestInit['headers'],
) {
  return async (): Promise<TData> => {
    const res = await fetch(fetchConfig.endpoint, {
      method: 'POST',
      ...options,
      ...(variables?.preview ? fetchConfig.previewParams : fetchConfig.params),
      body: JSON.stringify({ query: query, variables }),
    })

    const json = await res.json()

    if (json.errors) {
      const errorCode = json.errors[0]?.extensions?.contentful?.code
      if (errorCode === 'UNRESOLVABLE_LINK') {
        return json.data
      }
      const { message } = json.errors[0]

      throw new Error(message)
    }

    return json.data
  }
}

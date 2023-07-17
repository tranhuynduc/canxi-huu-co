import ContentfulRenderer, { Links } from '../../../components/ContentfulRender'
import {
  GetGenericPagesDocument,
  GetGenericPagesQueryResponse,
  GetGenericPagesQueryVariables,
} from '../../../graphql/generic-page.generated'
import { getClient } from '../../../services/graphql'

export const revalidate = 10

const GenericPage = async ({ params }: { params: { slug: string[] } }) => {
  const slug: string = params.slug.join('/') || ''
  const response = await getClient().query<GetGenericPagesQueryResponse, GetGenericPagesQueryVariables>({
    query: GetGenericPagesDocument,
    variables: {
      slug,
    },
    fetchPolicy: 'no-cache',
    context: {
      fetchOptions: {
        next: { revalidate: 10 },
      },
    },
  })

  const page = response.data?.genericPageCollection?.items?.[0]

  if (!page) {
    return null
  }

  return (
    <>
      <div className="m-auto w-full py-12">
        <ContentfulRenderer json={page?.body?.json} links={page?.body?.links as Links} />
      </div>
    </>
  )
}

export default GenericPage

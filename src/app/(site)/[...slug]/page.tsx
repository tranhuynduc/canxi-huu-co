import ContentfulRenderer, { Links } from "../../../components/ContentfulRender";
import { GetGenericPagesDocument, GetGenericPagesQueryResponse, GetGenericPagesQueryVariables } from "../../../graphql/generic-page.generated";
import { getClient } from "../../../services/graphql";

export const revalidate = 10;

const GenericPage = async ({ params }: { params: { slug: string[] } }) => {
  const slug = params.slug.join('/') || ''
  console.log('here', slug)
  const response = await getClient().query<GetGenericPagesQueryResponse, GetGenericPagesQueryVariables>({
    query: GetGenericPagesDocument,
    variables: {
      slug
    },
  })
  console.log('response', response)


  const page = response.data?.genericPageCollection?.items?.[0]

  if (!page) {
    return null
  }

  return (
    <>
      <div className="m-auto flex w-full items-center justify-center py-12">
        <div>
          <ContentfulRenderer json={page?.body?.json} links={page?.body?.links as Links} />
        </div>
      </div>
    </>
  )
}

export default GenericPage

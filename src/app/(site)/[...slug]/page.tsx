import { useGetGenericPagesQuery } from '../../../codegen/graphql/generic-page.generated'
import ContentfulRenderer, { Links } from '../../../components/ContentfulRender'

export const revalidate = 10

const GenericPage = async ({ params }: { params: { slug: string[] } }) => {
  const slug: string = params.slug.join('/') || ''
  const response = await useGetGenericPagesQuery.fetcher({ slug })()

  const page = response?.genericPageCollection?.items?.[0]

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

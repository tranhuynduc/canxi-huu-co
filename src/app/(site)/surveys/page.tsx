import { GetQuestionsDocument, GetQuestionsQueryResponse, GetQuestionsQueryVariables } from '../../../graphql/query.generated'
import { getClient } from '../../../services/graphql'
import CommonForm from '../../CommonForm'

export const revalidate = 60

export const metadata = {
  title: '7 loại trí thông minh',
  description: '7 loại trí thông minh',
}

export default async function Home(props) {
  const response = await getClient().query<GetQuestionsQueryResponse, GetQuestionsQueryVariables>({
    query: GetQuestionsDocument,
    fetchPolicy: 'no-cache',
  })

  const items = response.data?.questionCollection?.items || []

  return (
    <CommonForm items={items || []} />
  )
}

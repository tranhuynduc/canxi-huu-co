import { GetLinkedQuestionsDocument, GetLinkedQuestionsQueryResponse, GetLinkedQuestionsQueryVariables } from '../../../graphql/linkedQuestion.generated'
import { getClient } from '../../../services/graphql'
import CommonForm from '../../CommonForm'
import LinkedForm from './LinkedForm'

export const revalidate = 10

export const metadata = {
  title: 'Chỉ số hạnh phúc -',
  description: 'Chỉ số hạnh phúc',
}

export default async function Home(props) {
  const response = await getClient().query<GetLinkedQuestionsQueryResponse, GetLinkedQuestionsQueryVariables>({
    query: GetLinkedQuestionsDocument,
    fetchPolicy: 'no-cache',
  })

  const questions = response.data?.linkedQuestionCollection?.items || []

  return (
    <LinkedForm linkedQuestions={questions}/>
  )
}

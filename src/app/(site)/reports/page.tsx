import { Form, Input, Button } from 'antd'
import { Bar } from 'react-chartjs-2'
import {
  GetQuestionsQueryResponse,
  GetQuestionsQueryVariables,
  GetQuestionsDocument,
  GetJobsDocument,
  GetJobsQueryResponse,
  GetJobsQueryVariables,
} from '../../../graphql/query.generated'
import { getClient } from '../../../services/graphql'
import Inner from './inner'
import Header from '../../../components/Header'
import {
  GetIndustriesDocument,
  GetIndustriesQueryResponse,
  GetIndustriesQueryVariables,
} from '../../../graphql/industry.generated'
import {
  GetIndustryGroupsDocument,
  GetIndustryGroupsQueryResponse,
  GetIndustryGroupsQueryVariables,
} from '../../../graphql/industryGroup.generated'

export const revalidate = 60;

const ReportPage = async () => {
  const [{ data: questionsData }, { data: jobsData }, { data: industriesData }, { data: industryGroupsData }] =
    await Promise.all([
      getClient().query<GetQuestionsQueryResponse, GetQuestionsQueryVariables>({
        query: GetQuestionsDocument,
        fetchPolicy: 'no-cache',
      }),
      getClient().query<GetJobsQueryResponse, GetJobsQueryVariables>({
        query: GetJobsDocument,
        fetchPolicy: 'no-cache',
      }),
      getClient().query<GetIndustriesQueryResponse, GetIndustriesQueryVariables>({
        query: GetIndustriesDocument,
        fetchPolicy: 'no-cache',
      }),
      getClient().query<GetIndustryGroupsQueryResponse, GetIndustryGroupsQueryVariables>({
        query: GetIndustryGroupsDocument,
        fetchPolicy: 'no-cache',
      }),
    ])

  return (
    <>
      <Inner
        questions={questionsData.questionCollection?.items || []}
        jobs={jobsData.jobsCollection?.items || []}
        industries={industriesData.industryCollection?.items || []}
        industryGroups={industryGroupsData.industryGroupCollection?.items || []}
      ></Inner>
    </>
  )
}

export default ReportPage

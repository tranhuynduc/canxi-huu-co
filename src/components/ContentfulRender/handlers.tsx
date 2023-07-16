/* eslint-disable @next/next/no-img-element */

import Link from "next/link"
import { Asset, GenericPage } from "../../graphql/type.graphql"

type Data = Required<GenericPage>

type TypenameMapper = {
  [K in Data['__typename']]: (
    data: Extract<Data, { __typename: K }>,
    options?: { theme: 'light' | 'dark' },
  ) => React.ReactNode
}


export const typenameComponentMap: TypenameMapper = {
  GenericPage: (data) => {
    return <Link href={`/${data.slug}`}>{data.title}</Link>
  }
}

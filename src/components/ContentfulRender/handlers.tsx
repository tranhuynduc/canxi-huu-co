/* eslint-disable @next/next/no-img-element */

import Link from 'next/link'
import { GenericPage } from '../../codegen/graphql/type.graphql'

type Data = Required<GenericPage>

type TypenameMapper = {
  [K in Data['__typename']]: (
    data: Extract<Data, { __typename: K }>,
    options?: { theme: 'light' | 'dark' },
  ) => React.ReactNode
}

export const typenameComponentMap: TypenameMapper = {
  GenericPage: (data) => {
    return (
      <div className="flex-1 w-full my-2">
        <Link className="hover:text-gray-400 transition" href={`/${data.slug}`}>
          {data.title}
        </Link>
      </div>
    )
  },
}

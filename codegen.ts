import type { CodegenConfig } from '@graphql-codegen/cli'
import dotenv from 'dotenv'
const envPaths = ['.env.local', '/.env']

envPaths.forEach((path) => dotenv.config({ path }))

const config: CodegenConfig = {
  overwrite: true,
  schema: process.env.NEXT_PUBLIC_CONTENTFUL_GRAPHQL_ENDPOINT,
  config: {
    headers: {
      authorization: `Bearer ${process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN}`,
    },
  },
  ignoreNoDocuments: true,
  documents: ['./src/codegen/**/*.{gql,graphql}'],
  generates: {
    './src/codegen/graphql/type.graphql.ts': {
      plugins: ['typescript', 'typescript-operations'],
      documents: ['./src/**/*.graphql'],
      config: {
        maybeValue: 'T',
      },
    },
    './src/codegen/schema/graphql.schema.json': {
      plugins: ['introspection'],
      config: {
        maybeValue: 'T',
      },
    },
    './src/codegen/graphql/': {
      preset: 'near-operation-file-preset',
      plugins: ['typescript-operations', 'typescript-react-query'],

      presetConfig: {
        baseTypesPath: 'type.graphql.ts',
        extension: '.generated.tsx',
      },
      config: {
        operationResultSuffix: 'Response',
        maybeValue: 'T',
        exposeQueryKeys: true,
        exposeFetcher: true,
        rawRequest: false,
        inlineFragmentTypes: 'combine',
        skipTypename: false,
        exportFragmentSpreadSubTypes: true,
        dedupeFragments: true,
        preResolveTypes: true,
        withHooks: true,
        fetcher: './customFetcher#customFetcher',
      },
    },
    './src/codegen/schema/schema.graphql': {
      plugins: ['schema-ast'],
      config: {
        maybeValue: 'T',
      },
    },
  },
  // hooks: {
  //   afterOneFileWrite: ['prettier --write'],
  // },
}

export default config

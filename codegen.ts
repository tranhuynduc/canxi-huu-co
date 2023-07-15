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
  documents: ['./src/graphql/**/*.{gql,graphql}'],
  generates: {
    './src/graphql/type.graphql.ts': {
      plugins: ['typescript'],
      config: {
        maybeValue: 'T',
      },
    },
    './src/schema/graphql.schema.json': {
      plugins: ['introspection'],
      config: {
        maybeValue: 'T',
      },
    },
    './src/graphql/': {
      preset: 'near-operation-file-preset',
      plugins: ['typescript-react-apollo', 'typescript-operations'],

      presetConfig: {
        baseTypesPath: 'type.graphql.ts',
        extension: '.generated.tsx',
      },
      config: {
        operationResultSuffix: 'Response',
        maybeValue: 'T',
      },
    },
    './src/schema/schema.graphql': {
      plugins: ['schema-ast'],
      config: {
        maybeValue: 'T',
      },
    },
    './src/apollo/possibleTypes.json': {
      plugins: ['fragment-matcher'],
      config: {
        maybeValue: 'T',
      },
    },
  },
}

export default config

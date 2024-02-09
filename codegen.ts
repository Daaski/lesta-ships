import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
    schema: `${process.env.NEXT_PUBLIC_API_URL}`,
    documents: ['src/graphql/**/*.gql'],
    generates: {
        'src/graphql/types.ts': {
            plugins: ['typescript', 'typescript-operations'],
        },
        'src/graphql/schema.graphql': {
            plugins: ['schema-ast']
        }
    },
    ignoreNoDocuments: true,
}
export default config


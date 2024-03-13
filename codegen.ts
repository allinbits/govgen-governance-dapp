import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "http://164.92.143.81:8080/v1/graphql",
  documents: ["src/**/*.ts", "src/**/*.graphql"],
  generates: {
    "./src/gql/": {
      preset: "client",
      plugins: ["typescript-vue-apollo"],
      config: {
        documentMode: "external",
        
      },
    },
  },
};

export default config;

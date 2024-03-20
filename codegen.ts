import { CodegenConfig } from "@graphql-codegen/cli";
import dotenv from "dotenv";
dotenv.config();
const config: CodegenConfig = {
  schema: process.env.VITE_GRAPHQL_ENDPOINT ?? "https://graphql.devnet.govgen.dev/v1/graphql",
  documents: ["src/**/*.graphql"],
  generates: {
    "./src/gql/": {
      preset: "client",
    },
  },
};

export default config;

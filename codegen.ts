import { CodegenConfig } from "@graphql-codegen/cli";
import dotenv from "dotenv";
dotenv.config();
const config: CodegenConfig = {
  schema: process.env.VITE_GRAPHQL_ENDPOINT ?? "https://graphql-govgen-devnet-4.allinbits.services/v1/graphql",
  documents: ["src/**/*.graphql"],
  generates: {
    "./src/gql/": {
      preset: "client",
    },
  },
};

export default config;

import { CodegenConfig } from "@graphql-codegen/cli";
import dotenv from "dotenv";
dotenv.config();
const config: CodegenConfig = {
  schema: process.env.VITE_GRAPHQL_ENDPOINT ?? "http://164.92.143.81:8080/v1/graphql",
  documents: ["src/**/*.graphql"],
  generates: {
    "./src/gql/": {
      preset: "client",
    },
  },
};

export default config;

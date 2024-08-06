module.exports = {
  client: {
    service: {
      name: "EclesiaIndexer",
      // URL to the GraphQL API
      url: "https://graphql-devnet.govgen.dev/v1/graphql",
    },
    // Files processed by the extension
    includes: ["src/**/*.vue", "src/**/*.ts"],
  },
};

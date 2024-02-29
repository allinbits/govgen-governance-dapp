module.exports = {
  client: {
    service: {
      name: "BDIndexer",
      // URL to the GraphQL API
      url: "http://164.92.143.81:8080/v1/graphql",
    },
    // Files processed by the extension
    includes: ["src/**/*.vue", "src/**/*.ts"],
  },
};

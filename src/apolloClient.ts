import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client/core";

console.log("[DEBUG] env", import.meta.env);

// HTTP connection to the API
const httpLink = createHttpLink({
  // You should use an absolute URL here
  uri: import.meta.env.VITE_GRAPHQL_ENDPOINT ?? "https://graphql-devnet.govgen.dev/v1/graphql",
});

// Cache implementation
const cache = new InMemoryCache();

// Create the apollo client
const apolloClient = new ApolloClient({
  link: httpLink,
  cache,
});
export default apolloClient;

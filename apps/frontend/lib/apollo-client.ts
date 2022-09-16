import { ApolloClient, InMemoryCache } from '@apollo/client';

const SERVER_URI = process.env.SERVER_URI;

const client = new ApolloClient({
  uri: SERVER_URI,
  cache: new InMemoryCache(),
  ssrMode: true,
});

export default client;

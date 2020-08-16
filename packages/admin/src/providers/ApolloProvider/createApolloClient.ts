import { ApolloClient, InMemoryCache } from '@apollo/client';

const createApolloClient = () => {
  const client = new ApolloClient({
    uri: APOLLO_URI,
    cache: new InMemoryCache(),
  });

  return client;
};

export default createApolloClient;

import { ApolloClient, InMemoryCache } from '@apollo/client';

const createApolloClient = () => {
  const client = new ApolloClient({
    uri: 'http://wsl.ru:4000/graphql',
    cache: new InMemoryCache(),
  });

  return client;
};

export default createApolloClient;

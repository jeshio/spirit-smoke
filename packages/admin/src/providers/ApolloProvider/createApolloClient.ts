import { ApolloClient, InMemoryCache, from, HttpLink } from '@apollo/client';
import errorHandler from './errorHandler';

const httpLink = new HttpLink({
  uri: APOLLO_URI,
});

const link = from([errorHandler, httpLink]);

const createApolloClient = () => {
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    link,
    defaultOptions: {
      watchQuery: {
        fetchPolicy: 'cache-and-network',
        errorPolicy: 'all',
      },
      query: {
        fetchPolicy: 'cache-first',
        errorPolicy: 'all',
      },
      mutate: {
        errorPolicy: 'all',
      },
    },
  });

  return client;
};

export default createApolloClient;

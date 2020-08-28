import { ApolloClient, InMemoryCache, from, HttpLink } from '@apollo/client';
import introspectionResult from '@/gql/__generated__/introspection-result';
import errorHandler from './errorHandler';

const httpLink = new HttpLink({
  uri: APOLLO_URI,
});

const link = from([errorHandler, httpLink]);

const createApolloClient = () => {
  const client = new ApolloClient({
    cache: new InMemoryCache({
      possibleTypes: introspectionResult.possibleTypes,
      typePolicies: {
        Query: {
          fields: {
            products: {
              merge(existing, incoming) {
                return incoming;
              },
            },
            companies: {
              merge(existing, incoming) {
                return incoming;
              },
            },
          },
        },
      },
    }),
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

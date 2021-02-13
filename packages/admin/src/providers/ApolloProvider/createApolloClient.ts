import { ApolloClient, InMemoryCache, from, HttpLink } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import introspectionResult from '@/gql/__generated__/introspection-result'
import errorHandler from './errorHandler'

function getCookie(name: string) {
  const value = `; ${document.cookie}`
  const parts = value.split(`; ${name}=`)
  if (parts.length === 2) return parts.pop()?.split(';').shift()

  return undefined
}

const httpLink = new HttpLink({
  /* eslint-disable-next-line @typescript-eslint/ban-ts-comment */
  // @ts-ignore
  uri: APOLLO_URI,
  credentials: 'same-origin',
})

const authLink = setContext((_, { headers }) => {
  const token = getCookie('token')
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  }
})

const link = from([errorHandler, authLink, httpLink])

const models = ['products', 'companies', 'productCategories', 'features']

const createApolloClient = () => {
  const client = new ApolloClient({
    cache: new InMemoryCache({
      possibleTypes: introspectionResult.possibleTypes,
      typePolicies: {
        Query: {
          fields: models.reduce(
            (base, key) => ({
              ...base,
              [key]: {
                merge(existing: any, incoming: any) {
                  return incoming
                },
              },
            }),
            {}
          ),
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
  })

  return client
}

export default createApolloClient

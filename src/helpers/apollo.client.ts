import ApolloClient from 'apollo-boost'
import 'isomorphic-fetch'

const apolloClient = new ApolloClient({
  uri: `${process.env.HASURA_ORIGIN}/v1/graphql`,
  request: async operation => {
    operation.setContext({
      headers: {
        'Content-Type': 'application/json',
        'X-Hasura-Admin-Secret': process.env.HASURA_ADMIN_SECRET,
      },
    })
  },
})

apolloClient.defaultOptions = {
  watchQuery: {
    fetchPolicy: 'cache-and-network',
    errorPolicy: 'all',
  },
  query: {
    fetchPolicy: 'no-cache'
  }
}

export default apolloClient
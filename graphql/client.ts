import { ApolloClient, InMemoryCache } from '@apollo/client';

export const apolloClient = new ApolloClient({
  uri: 'https://syn-api-prod.herokuapp.com/graphql',
  cache: new InMemoryCache(),
});

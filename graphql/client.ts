import { ApolloClient, InMemoryCache } from '@apollo/client';

// ! Using process.env throws an unexpected error
export const apolloClient = new ApolloClient({
  uri: 'https://syn-api-prod.herokuapp.com/graphql',
  cache: new InMemoryCache(),
  headers: {
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwb3NpdGlvbklkIjoibmVyZGVyeSIsInByb2plY3RJZCI6IjdkZDc4M2U1LWEzNTItNDI0My05ZjM0LTQ4NDNkODdiYTczYSIsImZ1bGxOYW1lIjoiQWx2YXJvIEFxdWlqZSIsImVtYWlsIjoiYWx2YXJvYXF1aWplQHJhdm4uY28iLCJpYXQiOjE2Mzc3MDY4Nzl9.4g_iTVc67xOSscfdJyMAuD0MEMC_9_JbOpXXSu1S4Rg',
  },
});

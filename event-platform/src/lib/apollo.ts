import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4oqdh9s0we201xl0w659yej/master',
  cache: new InMemoryCache()
})
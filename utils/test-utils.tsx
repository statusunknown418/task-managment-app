import { ApolloProvider } from '@apollo/client';
import { render, RenderOptions } from '@testing-library/react';
import { NextPage } from 'next';
import { ReactElement } from 'react';
import { apolloClient } from '../graphql/client';

const Providers: NextPage = ({ children }) => {
  return <ApolloProvider client={apolloClient}>{children}</ApolloProvider>;
};

export const customRender = (ui: ReactElement, options: RenderOptions = {}) => {
  return render(ui, { wrapper: Providers, ...options });
};

import { ApolloProvider } from '@apollo/client';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { Layout } from '../components/Layout';
import { apolloClient } from '../graphql/client';
import '../styles/globals.css';
import { CustomGlobalStyles, customTheme } from '../styles/theme.config';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={customTheme}>
      <CustomGlobalStyles />
      <ApolloProvider client={apolloClient}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ApolloProvider>
    </ThemeProvider>
  );
}

export default MyApp;

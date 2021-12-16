import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { CustomGlobalStyles, customTheme } from '../styles/theme.config';
import { Layout } from '../components/Layout';
import { ApolloProvider } from '@apollo/client';
import { apolloClient } from '../graphql/client';

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

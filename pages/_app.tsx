import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { CustomGlobalStyles, customTheme } from '../styles/theme.config';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={customTheme}>
      <CustomGlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;

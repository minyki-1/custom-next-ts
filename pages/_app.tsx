import type {AppProps} from 'next/app';
import {ThemeProvider} from 'styled-components';
import Head from 'next/head';

import {GlobalStyle} from '../src/styles/global-styles';
import {theme} from '../src/styles/theme';


export default function App({Component, pageProps}: AppProps) {
  return (
      <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Component {...pageProps} />
      </ThemeProvider>
  );
}
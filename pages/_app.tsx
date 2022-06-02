import type { AppProps } from 'next/app';
import React, { useState } from 'react';

import { ThemeProvider } from 'styled-components';
import GlobalStyles from 'styles/globalStyles';
import { lightTheme, darkTheme } from 'styles/theme';

import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  const [theme] = useState('light');

  // const toggleTheme = () => {
  //   theme == 'light' ? setTheme('dark') : setTheme('light');
  // };

  return (
    <ThemeProvider theme={theme == 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;

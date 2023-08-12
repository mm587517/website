import '../styles/globals.css';
import '../styles/nprogress.css';
import type { AppProps } from 'next/app';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import React, { useEffect } from 'react';

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: true,
};

export const theme = extendTheme({ config });

function WebsiteApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    import('../components/PageProgressBar');
  });
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default WebsiteApp;

import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ChakraProvider, Heading } from '@chakra-ui/react';
import { MDXProvider } from '@mdx-js/react';
import React from 'react';

const components = {
  h1: ({ children }: React.PropsWithChildren) => (
    <Heading as='h1' size='3xl'>
      {children}
    </Heading>
  ),
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <MDXProvider components={components}>
        <Component {...pageProps} />
      </MDXProvider>
    </ChakraProvider>
  );
}

export default MyApp;

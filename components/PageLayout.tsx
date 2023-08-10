import { Box, Center } from '@chakra-ui/react';
import React from 'react';
import { Header } from './Header';

export const PageLayout: React.FC<React.PropsWithChildren<{}>> = ({
  children,
}) => {
  return (
    <Box>
      <Header />
      <Center mt={4}>
        <Box>{children}</Box>
      </Center>
    </Box>
  );
};

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
        <Box
          m={[2, 4, 8]}
          maxW={['100%', '90%', '1600px']} // Adjust the values as needed
        >
          {children}
        </Box>
      </Center>
    </Box>
  );
};

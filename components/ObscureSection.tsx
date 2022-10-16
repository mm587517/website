import React, { useState } from 'react';
import {
  Box,
  Button,
  Collapse,
  Fade,
  Heading,
  useColorModeValue,
  useDisclosure,
  Text,
  Flex,
} from '@chakra-ui/react';

export const ObscureBlock: React.FC<any> = ({ children, question }) => {
  const { isOpen, onToggle } = useDisclosure();

  const [show, setShow] = React.useState(false);

  const handleToggle = () => setShow(!show);

  return (
    <>
      <Flex alignItems='center' gap='4'>
        <Text fontSize='md'>{question}</Text>
        <Button
          colorScheme='teal'
          variant='ghost'
          onClick={handleToggle}
          w='5em'
        >
          {show ? 'Hide' : 'Show'}
        </Button>
      </Flex>
      <Collapse startingHeight={0} in={show}>
        <Box ml={10}>{children}</Box>
      </Collapse>
    </>
  );
};

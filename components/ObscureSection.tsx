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
  IconButton,
  Divider,
} from '@chakra-ui/react';
import { ArrowDownIcon, ArrowUpIcon, SearchIcon } from '@chakra-ui/icons';

export const ObscureSection: React.FC<any> = ({ children, section }) => {
  const { isOpen, onToggle } = useDisclosure();

  const [show, setShow] = React.useState(false);

  const handleToggle = () => setShow(!show);

  return (
    <>
      <Flex alignItems='center' gap='4'>
        <Heading as='h2' size='xl' mb={6}>
          {section}
          <Divider orientation='horizontal' />
        </Heading>

        {show ? (
          <IconButton
            mb={6}
            colorScheme='teal'
            variant='ghost'
            onClick={handleToggle}
            w='1em'
            aria-label={`Expand ${section}`}
            icon={<ArrowUpIcon />}
          />
        ) : (
          <IconButton
            mb={6}
            colorScheme='teal'
            variant='ghost'
            onClick={handleToggle}
            w='1em'
            aria-label={`Expand ${section}`}
            icon={<ArrowDownIcon />}
          />
        )}
      </Flex>
      <Collapse startingHeight={0} in={show}>
        <Box ml={10}>{children}</Box>
      </Collapse>
    </>
  );
};

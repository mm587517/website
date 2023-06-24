import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import {
  Box,
  Flex,
  Heading,
  HStack,
  IconButton,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
import Link from 'next/link';

export const Header = () => {
  const { toggleColorMode } = useColorMode();
  const icon = useColorModeValue(SunIcon, MoonIcon);
  const background = useColorModeValue('gray.400', 'gray.600');

  return (
    <Flex
      as='header'
      flexDirection='row'
      alignItems='center'
      p='4'
      bg={background}
      columnGap='4'
    >
      <Link href='/'>
        <Heading as='h3' cursor='pointer'>
          Marcelo&apos;s Notes
        </Heading>
      </Link>
      <Box ml='auto'>
        <IconButton
          aria-label={''}
          as={icon}
          onClick={toggleColorMode}
          size='xs'
          bg='none'
          cursor='pointer'
        />
      </Box>
      <HStack justifySelf='flex-end'>
        <Link href='/'>Home</Link>
        <Link href='/posts'>Posts</Link>
      </HStack>
    </Flex>
  );
};

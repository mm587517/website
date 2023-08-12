import { MoonIcon, SunIcon, HamburgerIcon } from '@chakra-ui/icons';
import {
  Box,
  Flex,
  Heading,
  HStack,
  IconButton,
  useColorMode,
  useColorModeValue,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useBreakpointValue,
} from '@chakra-ui/react';
import Link from 'next/link';

export const Header = () => {
  const { toggleColorMode } = useColorMode();
  const icon = useColorModeValue(SunIcon, MoonIcon);
  const background = useColorModeValue('teal.400', 'teal.400');

  const isMobile = useBreakpointValue({ base: true, md: false });

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
        <Heading
          as='h3'
          cursor='pointer'
          textColor={'white'}
          _hover={{ color: 'gray.200' }}
          transition='color 0.3s'
        >
          Marcelo&apos;s Notes
        </Heading>
      </Link>
      <Box ml='auto'>
        <IconButton
          aria-label='Toggle color mode'
          as={icon}
          onClick={toggleColorMode}
          size='xs'
          bg='none'
          cursor='pointer'
          color={'white'}
          _hover={{ color: 'gray.200' }}
        />
      </Box>
      {isMobile ? (
        <Menu>
          <MenuButton
            as={IconButton}
            icon={
              <HamburgerIcon
                boxSize={6}
                color={'white'}
                _hover={{ color: 'gray.200', bg: 'none' }}
              />
            }
            bg='none'
            _hover={{ bg: 'none' }}
            cursor='pointer'
          />
          <MenuList>
            <MenuItem>
              <Link href='/posts'>Posts</Link>
            </MenuItem>
            <MenuItem>
              <Link href='/publications'>Publications</Link>
            </MenuItem>
          </MenuList>
        </Menu>
      ) : (
        <>
          <HStack justifySelf='flex-end'>
            <Link href='/posts'>Posts</Link>
          </HStack>
          <HStack justifySelf='flex-end'>
            <Link href='/publications'>Publications</Link>
          </HStack>
        </>
      )}
    </Flex>
  );
};

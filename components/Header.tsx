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
  const background = useColorModeValue('gray.400', 'gray.600');

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
        <Heading as='h3' cursor='pointer'>
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
        />
      </Box>
      {isMobile ? (
        <Menu>
          <MenuButton
            as={IconButton}
            icon={<HamburgerIcon boxSize={6} />}
            bg='none'
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

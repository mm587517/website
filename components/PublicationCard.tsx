import React, { useState } from 'react';
import {
  Box,
  Text,
  Link,
  Flex,
  Button,
  Collapse,
  useColorMode,
} from '@chakra-ui/react';

interface PublicationProps {
  title: string;
  authors: string[];
  conference: string;
  link: string;
  github?: string;
  abstract: string;
  location: string;
}

const PublicationCard: React.FC<PublicationProps> = ({
  title,
  authors,
  conference,
  link,
  github,
  abstract,
  location,
}) => {
  const [showAbstract, setShowAbstract] = useState(false);

  const toggleAbstract = () => {
    setShowAbstract(!showAbstract);
  };

  const me: string = 'Marcelo Morales';

  const maxCardWidth = ['100%', '80%', '750px'];
  const abstractWidth = '80%'; // Define the width of the abstract content

  const { colorMode } = useColorMode();

  return (
    <Box
      p={5}
      borderWidth='1px'
      borderRadius='md'
      boxShadow='md'
      width='100%'
      maxWidth={maxCardWidth}
      margin='0 auto'
      transition='transform 0.3s, box-shadow 0.3s'
      _hover={{
        transform: 'scale(1.02)',
        boxShadow: '0px 6px 12px rgba(0, 0, 0, 0.1)',
      }}
    >
      <Link
        href={link}
        target='_blank'
        rel='noopener noreferrer'
        _hover={{ textDecoration: 'none' }}
      >
        <Box
          as='h2'
          fontSize='xl'
          fontWeight='semibold'
          color={colorMode === 'dark' ? 'white' : 'black'}
          transition='color 0.3s'
          _hover={{ color: 'teal.300' }}
        >
          {title}
        </Box>
      </Link>
      <Text fontSize='md' color='gray.500'>
        {authors.map((author, index) => (
          <React.Fragment key={index}>
            {index > 0 && ', '}
            <span
              style={{
                fontWeight: author === me ? 'bold' : 'normal',
                textDecoration: author === me ? 'underline' : 'none',
              }}
            >
              {author}
            </span>
          </React.Fragment>
        ))}
      </Text>

      <Text fontSize='md' fontWeight='normal' color='gray.500'>
        {conference}
      </Text>
      <Text fontSize='md' fontWeight='normal' color='gray.500'>
        {location}
      </Text>
      <Flex mt={2}>
        {github && (
          <Link
            href={github}
            isExternal
            colorScheme='gray'
            fontSize='sm'
            mr={2}
          >
            <Box
              as='img'
              src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/2048px-Octicons-mark-github.svg.png'
              alt='GitHub Repository'
              width='24px'
              height='24px'
              borderRadius='full'
              bg='white'
              p='1px'
              boxSizing='content-box'
              style={{ verticalAlign: 'middle' }}
            />
          </Link>
        )}
      </Flex>
      <Button onClick={toggleAbstract} mt={4}>
        Abstract
      </Button>
      <Collapse in={showAbstract}>
        <Text m={2} fontSize='sm' fontWeight='normal' as='p'>
          {abstract}
        </Text>
      </Collapse>
    </Box>
  );
};

export default PublicationCard;

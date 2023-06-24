import { Box, Heading, Img, useColorModeValue, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { PostCardProps } from './PostCard.props';

export const PostCard: React.FC<PostCardProps> = ({
  slug,
  banner,
  title,
  author,
}) => {
  const cardBg = useColorModeValue('gray.200', 'gray.700');
  const imgBg = useColorModeValue('gray.50', 'gray.500');

  return (
    <Link href={`/posts/${slug}`}>
      <Box
        w='360px'
        background={cardBg}
        rounded='md'
        overflow='hidden'
        cursor='pointer'
        shadow='lg'
        transition='all 200ms ease-in-out'
        _hover={{
          transform: 'scale(1.025)',
        }}
      >
        <Img src={banner} w='360px' h='200px' objectFit='fill' bg={imgBg} />
        <Box p='2'>
          <Heading as='h3' size='md'>
            {title}
          </Heading>
          <Text>{author}</Text>
        </Box>
      </Box>
    </Link>
  );
};

import {
  Box,
  Flex,
  Heading,
  Img,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import type { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import Link from 'next/link';
import { PageLayout } from '../components/PageLayout';
import { getAllPosts, Post } from '../utils/posts';

type PageProps = InferGetStaticPropsType<typeof getStaticProps>;

const Home: NextPage<PageProps> = ({ posts }) => {
  const cardBg = useColorModeValue('gray.200', 'gray.700');
  const imgBg = useColorModeValue('gray.50', 'gray.500');

  const types = ['Classes', 'Resources', 'Fun'];

  return (
    <PageLayout>
      <Heading margin={8} as='h2'>
        Notes and Resources
      </Heading>
      My name is marcelo
    </PageLayout>
  );
};

export const getStaticProps: GetStaticProps<{ posts: Post[] }> = async () => {
  const posts = await getAllPosts();

  return {
    props: {
      posts,
    },
  };
};

export default Home;

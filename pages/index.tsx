import { Box, Heading, Img, Text } from '@chakra-ui/react';
import type { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import Link from 'next/link';
import { getAllPosts, Post } from '../utils/posts';

type PageProps = InferGetStaticPropsType<typeof getStaticProps>;

const Home: NextPage<PageProps> = ({ posts }) => {
  return (
    <Box>
      hello there
      <Box>
        {posts.map((post) => {
          return (
            <Link key={post.slug} href={`/posts/${post.slug}`}>
              <Box width={10} height={10}>
                <Img src={post.banner} />
                <Heading as='h3' size='md'>
                  {post.title}
                </Heading>
                <Text>By: {post.author}</Text>
              </Box>
            </Link>
          );
        })}
      </Box>
    </Box>
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

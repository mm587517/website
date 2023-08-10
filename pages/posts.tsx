import { Flex, Heading } from '@chakra-ui/react';
import type { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import { PageLayout } from '../components/PageLayout';
import { getAllPosts, Post } from '../utils/posts';
import { PostCard } from '../components/PostCard/PostCard';

type PageProps = InferGetStaticPropsType<typeof getStaticProps>;

const Posts: NextPage<PageProps> = ({ posts }) => {
  const types = Array.from(new Set(posts.map((post) => post.type))).sort();
  return (
    <PageLayout>
      {types.map((type) => {
        return (
          <>
            <Heading marginLeft={8} as='h3'>
              {type}
            </Heading>
            <Flex flexDir='row' p='8' gap='4' flexWrap='wrap'>
              {posts
                .filter((post) => post.type === type)
                .map((post, index) => {
                  return (
                    <PostCard
                      slug={post.slug}
                      banner={post.banner}
                      title={post.title}
                      author={post.author}
                      key={index}
                    />
                  );
                })}
            </Flex>
          </>
        );
      })}
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

export default Posts;

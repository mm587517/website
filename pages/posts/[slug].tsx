import {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
  NextPage,
} from 'next/types';
import { MDXRemote } from 'next-mdx-remote';
import { getAllPosts, getPostBySlug, Post } from '../../utils/posts';
import { Box, Heading } from '@chakra-ui/react';
import { PageLayout } from '../../components/PageLayout';
import { CodeBlock } from '../../components/CodeBlock';

type PageProps = InferGetStaticPropsType<typeof getStaticProps>;

const components = {
  h1: ({ children }: React.PropsWithChildren) => (
    <Heading as='h1' size='3xl'>
      {children}
    </Heading>
  ),
  pre: CodeBlock as any,
};

const PostPage: NextPage<PageProps> = ({ post }) => {
  return (
    <PageLayout>
      <Box
        m="auto"
        mt="16"
        w="100%"
        maxW="1080px"
        px="2"
      >
        <MDXRemote {...post.content} components={components} />
      </Box>
    </PageLayout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getAllPosts();
  return {
    paths: posts.map((p) => {
      return {
        params: {
          slug: p.slug,
        },
      };
    }),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<{ post: Post }> = async ({
  params,
}) => {
  const slug = params!.slug as string;
  return {
    props: {
      post: await getPostBySlug(slug),
    },
  };
};

export default PostPage;

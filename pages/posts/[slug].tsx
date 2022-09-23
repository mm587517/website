import {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
  NextPage,
} from 'next/types';
import { MDXRemote } from 'next-mdx-remote';
import { getAllPosts, getPostBySlug, Post } from '../../utils/posts';

type PageProps = InferGetStaticPropsType<typeof getStaticProps>;

const PostPage: NextPage<PageProps> = ({ post }) => {
  return <MDXRemote {...post.content} />;
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

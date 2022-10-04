import {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
  NextPage,
} from "next/types";
import { MDXRemote } from "next-mdx-remote";
import { getAllPosts, getPostBySlug, Post } from "../../utils/posts";
import {
  Box,
  Heading,
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
  Text,
  Link,
} from "@chakra-ui/react";
import { PageLayout } from "../../components/PageLayout";
import { CodeBlock } from "../../components/CodeBlock";
import { Children, cloneElement } from "react";

type PageProps = InferGetStaticPropsType<typeof getStaticProps>;

const components = {
  h1: ({ children }: React.PropsWithChildren) => (
    <Heading as="h1" size="3xl" borderBottom={2} borderColor="blue">
      {children}
    </Heading>
  ),
  h2: ({ children }: React.PropsWithChildren) => (
    <Heading as="h2" size="xl">
      {children}
    </Heading>
  ),
  h3: ({ children }: React.PropsWithChildren) => (
    <Heading as="h3" size="lg">
      {children}
    </Heading>
  ),
  h4: ({ children }: React.PropsWithChildren) => (
    <Heading as="h4" size="sm">
      {children}
    </Heading>
  ),
  ul: ({ children }: React.PropsWithChildren) => (
    <UnorderedList>{children}</UnorderedList>
  ),
  ol: ({ children }: React.PropsWithChildren) => (
    <OrderedList>{children}</OrderedList>
  ),
  li: ({ children }: React.PropsWithChildren) => (
    <ListItem marginLeft={8}>{children}</ListItem>
  ),
  blockquote: ({ children }: React.PropsWithChildren) => (
    <Box marginLeft={8} bg="gray">
      {children}
    </Box>
  ),
  q: ({ children }: React.PropsWithChildren) => <Text>{children}</Text>,
  a: (props: any) => (
    <Link color="teal.300" isExternal href={props.href}>
      {props.children}
    </Link>
  ),
  p: ({ children }: React.PropsWithChildren) => (
    <Text fontSize="xl">{children}</Text>
  ),
  pre: CodeBlock as any,
};

const PostPage: NextPage<PageProps> = ({ post }) => {
  return (
    <PageLayout>
      <Box m="auto" mt="16" w="100%" maxW="1080px" px="2">
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

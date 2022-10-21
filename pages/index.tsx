import {
  Box,
  Flex,
  Heading,
  Img,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import type { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import Link from "next/link";
import { PageLayout } from "../components/PageLayout";
import { getAllPosts, Post } from "../utils/posts";

type PageProps = InferGetStaticPropsType<typeof getStaticProps>;

const Home: NextPage<PageProps> = ({ posts }) => {
  const cardBg = useColorModeValue("gray.200", "gray.700");
  const imgBg = useColorModeValue("gray.50", "gray.500");

  const types = ["Classes", "Research", "Fun"];

  return (
    <PageLayout>
      <Heading margin={8} as="h2">
        Notes and Resources
      </Heading>
      {types.map((type) => {
        return (
          <>
            <Heading marginLeft={8} as="h3">
              {type}
            </Heading>
            <Flex flexDir="row" p="8" gap="4" flexWrap="wrap">
              {posts
                .filter((post) => post.type === type)
                .map((post) => {
                  return (
                    <Link key={post.slug} href={`/posts/${post.slug}`}>
                      <Box
                        w="360px"
                        background={cardBg}
                        rounded="md"
                        overflow="hidden"
                        cursor="pointer"
                        shadow="lg"
                        transition="all 200ms ease-in-out"
                        _hover={{
                          transform: "scale(1.025)",
                        }}
                      >
                        <Img
                          src={post.banner}
                          w="360px"
                          h="200px"
                          objectFit="contain"
                          bg={imgBg}
                        />
                        <Box p="2">
                          <Heading as="h3" size="md">
                            {post.title}
                          </Heading>
                          <Text>{post.author}</Text>
                        </Box>
                      </Box>
                    </Link>
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

export default Home;

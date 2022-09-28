import { Box, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import { PageLayout } from "../components/PageLayout"

const Error404: React.FC = () => {
  return (
    <PageLayout>
      <Stack h="50vh" w="100%" alignItems="center" justifyContent="center">
        <Text fontSize="2xl">Cannot find that page</Text>
        <Heading as="h1" size="4xl">404</Heading>
      </Stack>
    </PageLayout>
  )
}

export default Error404;
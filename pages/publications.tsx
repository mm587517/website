import { Box, Heading } from '@chakra-ui/react';
import { PageLayout } from '../components/PageLayout';
import PublicationCard from '../components/PublicationCard';
import publicationsData from '../public/publications.json'; // Adjust the path

const Publications = () => {
  return (
    <PageLayout>
      <Heading as='h1' margin={8}>
        Publications
      </Heading>
      {publicationsData.map((publication, index) => (
        <Box m={4} key={index}>
          <PublicationCard key={index} {...publication} />
        </Box>
      ))}
    </PageLayout>
  );
};

export default Publications;

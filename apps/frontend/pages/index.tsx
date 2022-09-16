import {
  Box, Container,
  Heading, SimpleGrid, Text
} from '@chakra-ui/react';
import { useState } from 'react';
import { postInit } from '../components/api';
import Card from '../components/card';
import UrlUploadForm from '../components/form';


export default function Index({initPosts}) {
  const [posts, setPosts] = useState(initPosts)

  return (
    <Box minHeight="100vh" display="flex" flexDir="column">
      <Container maxW="xl" mt="95px" flex={1}>
        <Box textAlign="center">
          <Heading as="h1" size="4xl">
            ChaCha Gallery
          </Heading>
          <Text fontSize="lg" fontWeight="semibold" mt={2}>
            upload your images
          </Text>
        </Box>
          {UrlUploadForm()}
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={5} mt={6}>
            {posts.map((post) => (
              <Card key={post.id} post={post} />
            ))}
          </SimpleGrid>
      </Container>
    </Box>
  );
}

export async function getServerSideProps() {
  const initPosts = await postInit();
  return {
    props: {
      initPosts
    },
  };
}
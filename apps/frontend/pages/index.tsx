import {
  Box, Container,
  Heading, SimpleGrid, Text, useDisclosure
} from '@chakra-ui/react';
import { useState } from "react";
import Card from '../components/card';
import { getPosts } from '../lib/api';

export default function Index({posts}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedPost, setSelectedPost] = useState(null);

  const view = (post) => {
    setSelectedPost(post);
    onOpen();
  };

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
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={5} mt={6}>
            {posts.map((post) => (
              <Card key={post.id} post={post} onImageClick={view} />
            ))}
          </SimpleGrid>
      </Container>
    </Box>
  );
}

export async function getServerSideProps() {
  const posts = await getPosts();
  return {
    props: {
      posts,
    },
  };
}
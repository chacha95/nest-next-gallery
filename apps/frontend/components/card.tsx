import { Box, Flex, Img, Text, useColorModeValue } from '@chakra-ui/react';
import { motion } from 'framer-motion';


const MotionImg = motion(Img)


export default function Card({ post}) {
  const cardColor = useColorModeValue('gray.100', 'gray.700');

  return (
    <Box backgroundColor={cardColor} borderRadius={['sm', null, 'md']} overflow="hidden">
      <Box
        cursor="pointer"
        h="240px"
        position="relative"
        overflow="hidden">
        <MotionImg
          transition={{ duration: 0.3 }}
          whileHover={{ scale: 1.1 }}
          w="100%"
          h="100%"
          objectFit="cover"
          src={post.url}
        />
        </Box>
        <Flex px="4" py="2" align="center" justify="space-between" w="100%">
          <Text fontSize={['xs', 'sm']}>
            photo
          </Text>
          <Flex align="center">
        </Flex>
      </Flex>
    </Box>
  );
}

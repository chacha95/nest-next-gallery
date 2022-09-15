import {
  Container, Text, Wrap,
  WrapItem
} from "@chakra-ui/react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { getCuratedPhotos } from "../lib/api";

export default function Index({ data }) {
  const [photos, setPhotos] = useState(data);

  return (
    <div>
      <Head>
        <title> Gallery</title>
      </Head>
      <Container>
        <Text
          fontWeight="semibold"
          fontFamily={'monospace'}
          mb="1rem"
          textAlign="center"
          fontSize={["5xl"]}
        >
          Gallery
        </Text>
      </Container>
      <Wrap px="1rem" spacing={4} justify="center">
        {photos.map((pic) => (
          <WrapItem
            key={pic.id}
            boxShadow="base"
            rounded="20px"
            overflow="hidden"
            bg="white"
            lineHeight="0"
            _hover={{ boxShadow: "dark-lg" }}
          >
            <Link href={`/photos/${pic.id}`}>
              <a>
                <Image
                  src={pic.src.portrait}
                  height={600}
                  width={400}
                  alt={pic.url}
                />
              </a>
            </Link>
          </WrapItem>
        ))}
      </Wrap>
    </div>
  );
}

export async function getServerSideProps() {
  const data = await getCuratedPhotos();
  return {
    props: {
      data,
    },
  };
}
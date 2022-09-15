import { ApolloClient, gql, InMemoryCache } from '@apollo/client';

const API_KEY = process.env.NEXT_PUBLIC_PEXELS_API_KEY;
const SERVER_URI = process.env.SERVER_URI;

// export const getPosts = async () => {
//   const res = await fetch(
//     `https://api.pexels.com/v1/curated?page=11&per_page=18`,
//     {
//       headers: {
//         Authorization: API_KEY,
//       },
//     },
//   );
//   const responseJson = await res.json();
//   return responseJson.photos;
// };

export const client = new ApolloClient({
  uri: SERVER_URI,
  cache: new InMemoryCache(),
});

export async function getPosts() {
  const { data } = await client.query({
    query: gql`
      query {
        posts {
          id
          url
          author
        }
      }
    `,
  });

  return data.posts;
}

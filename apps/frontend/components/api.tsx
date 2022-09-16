import {
  ApolloClient,
  gql,
  InMemoryCache, useQuery
} from '@apollo/client';

const SERVER_URI = process.env.SERVER_URI;

export const client = new ApolloClient({
  uri: SERVER_URI,
  cache: new InMemoryCache(),
});

export async function postInit() {
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

  return data.posts;}

export async function GetPosts() {
  const query = gql`
    query getPosts {
      posts {
        id
        url
        author
      }
    }
  `;

  const { loading, error, data } = useQuery(query);

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  return data.posts;
}

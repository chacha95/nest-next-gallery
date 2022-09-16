import { Box, Button, FormControl, Input } from '@chakra-ui/react';
import { useState } from 'react';

export default function UrlUploadForm() {
  const [url, setUrl] = useState('');
  // const mutation = gql`
  //   mutation createPost {
  //     createPost(createPostInput: { $url: String!, $author: String! }) {
  //       id
  //       url
  //       author
  //     }
  //   }
  // `;
  // const [mutateFunction, { data, loading, error }] = useMutation(mutation);

  return (
    <Box p={6}>
      <FormControl>
        <FormControl >
          <Input
            placeholder="URL"
            value={url}
            onChange={e => (setUrl(e.target.value))}
          />
        </FormControl>
        <Box display='flex' justifyContent='center'>
          <Button
            width="medium"
            alignContent='center'
            mt={4}
            type="submit"
            textAlign='center'
            colorScheme='blue'
            onClick={async () => {
              // mutateFunction({variables: {url: url}});
            } }
            >
          Submit
          </Button>
        </Box>
      </FormControl>
    </Box>
  );
}

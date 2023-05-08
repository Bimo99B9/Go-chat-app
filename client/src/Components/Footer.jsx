import React from 'react';

import { Box, Heading, Center } from '@chakra-ui/react';

function Footer() {
  return (
    <Box padding={8}>
      <Center>
        <Heading fontStyle={'italic'} size="sm" paddingTop={2}>
          Made with ❤️ by DaniP and DaniL
        </Heading>
      </Center>
    </Box>
  );
}

export default Footer;

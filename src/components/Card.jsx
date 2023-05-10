import { Button, Flex, Text } from '@chakra-ui/react';
import React from 'react';

export default function Card() {
  return (
    <Flex bg={'black'} h={100} justifyContent="center" alignItems={'center'}>
      <Text as="b" color="white" pr={5}>
        BOOK NOW YOUR TRANSFER
      </Text>

      <Button bg="#ECB939" borderRadius={'none'}>
        Click here
      </Button>
    </Flex>
  );
}

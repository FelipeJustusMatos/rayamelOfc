import { Flex, Text } from '@chakra-ui/react';
import React from 'react';

export default function Card() {
  return (
    <>
      <Flex
        bg={'black'}
        h={100}
        alignItems={'center'}
        justifyContent={'center'}
      >
        <Text as="b" color="white">
          BOOK NOW YOUR TRANSFER
        </Text>
      </Flex>
    </>
  );
}

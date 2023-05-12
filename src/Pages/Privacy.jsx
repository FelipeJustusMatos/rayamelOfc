import { Flex } from '@chakra-ui/react';
import React from 'react';
import Navbar from '../components/Navbar';
import Upbar from '../components/Upbar';

export default function Privacy() {
  return (
    <>
      <Flex className="Upbar" flexDirection={'column'}>
        <Upbar />
        <Navbar />
      </Flex>
    </>
  );
}

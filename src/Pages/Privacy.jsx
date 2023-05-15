import { Flex } from '@chakra-ui/react';
import React from 'react';
import Navbar from '../components/Navbar';
import Policyscreen from '../components/Policyscreen';
import Upbar from '../components/Upbar';

export default function Privacy() {
  return (
    <>
      <Upbar />
      <Flex className="Upbar" flexDirection={'column'} shadow={'md'}>
        <Navbar />
      </Flex>
      <Policyscreen />
    </>
  );
}

import { Flex } from '@chakra-ui/react';
import React from 'react';
import Navbar from '../components/Navbar';
import Upbar from '../components/Upbar';
import Servicesscreen from '../components/Servicesscreen';

export default function Ourservices() {
  return (
    <>
      <Upbar />
      <Flex
        className="Upbar"
        flexDirection={'column'}
        shadow={'md'}
        borderBottom={'1px'}
      >
        <Navbar />
      </Flex>
      <Servicesscreen />
    </>
  );
}

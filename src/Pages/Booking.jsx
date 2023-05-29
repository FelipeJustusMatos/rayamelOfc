import { Flex } from '@chakra-ui/react';
import React from 'react';
import Formrequest from '../components/Formrequest';
import Navbar from '../components/Navbar';
import Upbar from '../components/Upbar';

export default function Booking() {
  return (
    <>
      <Upbar />
      <Flex className="Upbar" flexDirection={'column'} shadow={'md'}>
        <Navbar />
      </Flex>
      <Formrequest />
    </>
  );
}

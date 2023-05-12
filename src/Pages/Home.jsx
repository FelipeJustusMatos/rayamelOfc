import React from 'react';
import Cardbook from '../components/Cardbook';
import Firstscreen from '../components/Firstscreen';
import Footer from '../components/Footer';
import Formrequest from '../components/Formrequest';
import Navbar from '../components/Navbar';
import Services from '../components/Services';
import Upbar from '../components/Upbar';
import { Flex } from '@chakra-ui/react';
import './index.css';
export default function Home() {
  return (
    <>
      <Flex className="Upbar" flexDirection={'column'}>
        <Upbar />
        <Navbar />
      </Flex>

      <Firstscreen />
      <Cardbook />
      <Formrequest />
      <Services />
      <Footer />
    </>
  );
}

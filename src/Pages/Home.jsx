import { Flex } from '@chakra-ui/react';
import React from 'react';
import Cardbook from '../components/Cardbook';
import Firstscreen from '../components/Firstscreen';
import Footer from '../components/Footer';
import Formrequest from '../components/Formrequest';
import Navbar from '../components/Navbar';
import Services from '../components/Services';
import Upbar from '../components/Upbar';
import { Example } from '../components/ProgressBar';
import './index.css';
export default function Home() {
  return (
    <>
      <Upbar />
      <Flex className="Upbar" flexDirection={'column'} shadow={'md'}>
        <Navbar />
      </Flex>

      <Firstscreen />
      <Cardbook />
      <Example />
      <Formrequest />
      <Services />
      <Footer />
    </>
  );
}

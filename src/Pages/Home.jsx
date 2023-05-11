import React from 'react';
import Firstscreen from '../components/Firstscreen';
import Navbar from '../components/Navbar';
import Services from '../components/Services';
import Upbar from '../components/Upbar';
import Formrequest from '../components/Formrequest';
import Cardbook from '../components/Cardbook';
export default function Home() {
  return (
    <>
      <Upbar />
      <Navbar />
      <Firstscreen />
      <Cardbook />
      <Formrequest />
      <Services />
    </>
  );
}

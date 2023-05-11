import React from 'react';
import Cardbook from '../components/Cardbook';
import Firstscreen from '../components/Firstscreen';
import Formrequest from '../components/Formrequest';
import Navbar from '../components/Navbar';
import Services from '../components/Services';
import Upbar from '../components/Upbar';
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

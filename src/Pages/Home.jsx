import React from 'react';
import Upbar from '../components/Upbar';
import Services from '../components/Services';
import Navbar from '../components/Navbar';
import Firstscreen from '../components/Firstscreen';
import Card from '../components/Card';
export default function Home() {
  return (
    <>
      <Upbar />
      <Navbar />
      <Firstscreen />
      <Card />
      <Services />
    </>
  );
}

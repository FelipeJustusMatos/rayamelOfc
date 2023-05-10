import React from 'react';
import Card from '../components/Card';
import Firstscreen from '../components/Firstscreen';
import Navbar from '../components/Navbar';
import Services from '../components/Services';
import Upbar from '../components/Upbar';
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

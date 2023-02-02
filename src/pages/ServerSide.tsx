import Navbar from 'components/Navbar';
import Head from 'next/head';
import React from 'react';
import Hero from 'components/Hero';
import {sendSQL} from './api/query';
import Solutions from 'components/Solutions';
// import Grid from 'components/Grid';
import Footer from 'components/Footer';

export async function getServerSideProps(){
  return {
    props: {
      result : await sendSQL('select * from Login')
    }
  }
}

export default function Home(props:any) {
  return (
    <>
      <Head>
        <title>Prescription Tracker</title>
      </Head>

      <main>
        <Navbar />
        <Hero />
        <h1>Data{props.result}</h1>
        <Footer />
      </main>
    </>
  );
}

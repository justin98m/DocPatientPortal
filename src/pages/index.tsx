import Navbar from 'components/Navbar'
import Head from 'next/head'
import React from 'react'
import Footer from 'components/Footer'
import Hero from 'components/Hero'

export default function Home() {
  return (
    <>
      <Head>
        <title>Prescription Tracker</title>
      </Head>

      <main>
        <Navbar />
        <Hero/>
        <Footer/>
      </main>
    </>
  )
}

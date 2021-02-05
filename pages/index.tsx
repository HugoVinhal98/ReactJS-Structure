import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { Container } from '../styles/pages/Home'

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Homepage</title>
      </Head>
      <Image src="/logo.png" width={250} height={250} />
      <h1>ReactJS Structure</h1>
      <p>A ReactJS + Next.js structure made for you.</p>
    </Container>
  )
}

export default Home

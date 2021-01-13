import React from 'react'
import Head from 'next/head'

import ReactSvg from '../assets/react.svg'

import { Container } from '../styles/pages/Home'

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Homepage</title>
      </Head>

      <ReactSvg />
      <h1>ReactJS Structure</h1>
      <p>A ReactJS + Next.js structure made for you.</p>
    </Container>
  )
}

export default Home

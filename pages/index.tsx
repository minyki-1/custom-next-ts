import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styled from 'styled-components'

const Container = styled.div`
  width:100%;
  min-height:100vh;
`

const Home: NextPage = () => {
  return (
    <Container>
      NextJs Web
    </Container>
  )
}

export default Home

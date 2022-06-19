import type { NextPage } from 'next'
import styled from 'styled-components'

const Home: NextPage = () => {
  return (
    <Container>
      Next<br/>Typescript<br/>Styled-Components
    </Container>
  )
}

const Container = styled.div`
  width:100vw;
  min-height:100vh;
  background-color:#202020;
  color:#e5e5e5;
  font-size:18px;
` 

export default Home
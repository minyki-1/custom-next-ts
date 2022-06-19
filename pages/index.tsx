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
  font-size:18px;
` 

export default Home
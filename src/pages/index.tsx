import styled from 'styled-components'
import SvgHeart from '../svg/heart.svg';

export default function Home() {
  return (
    <Container>
      <h1>My Next WebApp</h1>
      <SvgHeart width="24" height="24" fill="white" />
    </Container>
  )
}

const Container = styled.div`
  width:100vw;
  min-height:100vh;
`

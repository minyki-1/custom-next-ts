import dynamic from 'next/dynamic';
import styled from 'styled-components'

function NoneSsr() {
  const body = document.body;
  return (
    <Container>
      <h1>document에 대해 에러 발생 없음</h1>
    </Container>
  )
}
const Container = styled.div`
  width:100vw;
  min-height:100vh;
`

export default dynamic(() => Promise.resolve(NoneSsr), { ssr: false });

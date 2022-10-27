import styled from 'styled-components'

export default function SsrPage({ data }: { data: { data: string } }) {
  const ssrData = data.data;
  return (
    <Container>
      {ssrData}
    </Container>
  )
}

export const getServerSideProps = async ({ req }:any) => {
  const originUrl = req.headers.host || "http://localhost:8080";
  const fetchUrl = `${originUrl.search("http://") !== -1 ? originUrl : ("http://" + originUrl)}/api/hello`;
  const fetchResult = await fetch(fetchUrl).then(response => response.json());

  return {
    props: {
      data: fetchResult
    }
  }
}

const Container = styled.div`
  width:100vw;
  min-height:100vh;
`

import styled from 'styled-components'

export default function Sample() {
  return (
    <Container>
      <h1>Sample Page</h1>
    </Container>
  )
}

const Container = styled.div`
  width:100vw;
  min-height:100vh;
`

// SSR
export const getServerSideProps = async ({ req }: any) => {
  const originUrl = req.headers.host;
  const fetchUrl = `${originUrl.search("http://") !== -1 ? originUrl : ("http://" + originUrl)}/api/hello`;
  const fetchResult = await fetch(fetchUrl).then(response => response.json());

  return {
    props: {
      data: fetchResult
    }
  }
}

// No prerender
// export default dynamic(() => Promise.resolve(NoneSsr), { ssr: false });

// import { withSSRContext } from 'aws-amplify'
import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import styled from 'styled-components'
// import { getPost } from "../../graphql/queries"
// import { deletePost as deletePostQuery } from "../../graphql/mutations"
// import { IPost } from '../../types';

const SsrPage: NextPage<{ data: { data: string } }> = ({ data }) => {
  const ssrData = data.data;

  return (
    <Container>
      {ssrData}
    </Container>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ req, params }) => {
  // const SSR = withSSRContext({ req });
  // const { data } = await SSR.API.graphql({
  //   query: getPost,
  //   variables: {
  //     id: params?.id
  //   }
  // });

  const { rawHeaders } = req;
  const newRawHeaders: { [key: string]: string } = {};
  rawHeaders.map((data, i) => i % 2 === 0 ? newRawHeaders[data] = rawHeaders[i + 1] : null);

  const fetchResult = await fetch(`http://${newRawHeaders.Host}/api/hello`).then(response => response.json());

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

export default SsrPage

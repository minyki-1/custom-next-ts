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

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  // const SSR = withSSRContext({ req });
  // const { data } = await SSR.API.graphql({
  //   query: getPost,
  //   variables: {
  //     id: params?.id
  //   }
  // });

  const originUrl = req.headers.host || "http://localhost:3003";
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

export default SsrPage

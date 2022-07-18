import type { NextPage } from 'next'
import styled from 'styled-components'

const StaticPage: NextPage = ({post}:any) => {
  return (
    <Container>
      <div>아이디 : {post.id}</div>
      <div>제목 : {post.title}</div>
    </Container>
  )
}

const test_db = [
  {
    id:"1",
    title:"게시물1"
  },
  {
    id:"2",
    title:"게시물2"
  }
]

export async function getStaticPaths() {
  const paths = test_db.map((post) => ({
    params: {id: post.id}, // id는 무조건 string이여야 한다.
  }))
  return { paths, fallback: "blocking" }
}

export async function getStaticProps({ params }:{params:{ id:string }}) {
  const post = test_db.filter(({id}) => id === params.id)[0] || {id:"error",title:"없는 게시물"};
  return {
    props: {
      post
    },
    revalidate: 60,
  }
}

const Container = styled.div`
  width:100vw;
  min-height:100vh;
  font-size:18px;
` 

export default StaticPage

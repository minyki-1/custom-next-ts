// import { API, withSSRContext } from 'aws-amplify'
// import type { GetStaticPaths, GetStaticProps, NextPage } from 'next'
// import Head from 'next/head';
// import styled from 'styled-components'
// import { listPosts, getPost } from "../../graphql/queries"
// import { deletePost as deletePostQuery } from "../../graphql/mutations"
// import { IPost } from '../../types';
// const SSR = withSSRContext();

// const SsgPage: NextPage<{ post: IPost }> = ({ post }: { post: IPost }) => {
//   const deletePost = async () => {
//     if(confirm("이 게시물을 삭제 하시겠습니까?")){
//       const {data} = await API.graphql({
//         query: deletePostQuery,
//         variables: {
//           input:{
//             id: post.id
//           }
//         }
//       }) as {data:{deletePost:IPost | null}};
//       if(data.deletePost === null) window.alert("삭제에 실패했습니다.");
//       else window.alert("삭제 성공");
//     }
//   }

//   return (
//     <Container>
//       <Head>
//         <title>{post.title}</title>
//         <meta name="description" content={`${post.descript}`} />
//         <meta property="og:image" content={`${post.img}`} />
//         <meta name="twitter:image" content={`${post.img}`} />
//       </Head>
//       <h1>아이디 : {post.id}</h1>
//       <strong>제목 : {post.title}</strong>
//       <h2>설명 : {post.descript}</h2>
//       <br />
//       <button onClick={deletePost}>삭제</button>
//     </Container>
//   )
// }

// export const getStaticPaths: GetStaticPaths = async () => {
//   const { data } = await SSR.API.graphql({ query: listPosts });
//   const paths = data.listPosts.items.slice(0, 9).map((post: any) => ({
//     params: { id: post.id }
//   }));
//   return { paths, fallback: "blocking" }
// }

// export const getStaticProps: GetStaticProps = async ({ params }) => {
//   const { data } = await SSR.API.graphql({
//     query: getPost,
//     variables: {
//       id: params?.id
//     }
//   });
//   return {
//     props: {
//       post: data.getPost
//     },
//     revalidate: 60,
//   }
// }

// const Container = styled.div`
//   width:100vw;
//   min-height:100vh;
// `

// export default SsgPage

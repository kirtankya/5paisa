// import { graph } from "@/Hooks/client";
// import { BLOGS } from "@/Hooks/graphql";
// import Footer from "@/common/footer";
// import Header from "@/common/header";
// import Blog_Page from "@/component/Blog_Page";
// import React from "react";

// export default function Blog({ posts }) {

//     return (
//         <>
//             <Header />
//             <Blog_Page
//                 posts={posts}
//             />
//             <Footer />
//         </>
//     );
// }

// export async function getServerSideProps({ params }) {
//     const AppNameVar = {
//         filters: {
//             appName: {
//                 contains: "5Paisa",
//             },
//         },
//         pagination: {
//             pageSize: 50000,
//             page: 1,
//         },
//         sort: ["publishedAt:desc"],
//     };
//     const variables_BLOG_FIND = {
//         filters: {
//             slug: {
//                 eq: params?.slug,
//             },
//         },
//     };
//     const { posts } = await graph?.request(
//         BLOGS,
//         variables_BLOG_FIND,
//         AppNameVar,
//     );

//     return {
//         props: {
//             posts: posts.data[0]?.attributes,
//         },
//     };
// }

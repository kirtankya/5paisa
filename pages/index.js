import { graph } from "@/Hooks/client";
import { graphcms } from "@/Hooks/graphQLClient";
import { BLOGS } from "@/Hooks/graphql";
import Footer from "@/common/footer";
import Header from "@/common/header";
import HomePage from "@/component/homePage";
export default function Home({ posts, categories }) {
  return (
    <>
      <Header />
      <HomePage posts={posts} categories={categories} />
      <Footer />
    </>
  );
}

export async function getServerSideProps() {
  const AppNameVar = {
    filters: {
      appName: {
        contains: "5Paisa",
      },
    },
    pagination: {
      pageSize: 50000,
      page: 1,
    },
    sort: ["publishedAt:desc"],
  };
  const { posts } = await graphcms?.request(BLOGS, AppNameVar);
  // const { blogs } = await graph?.request(Blog_Data);
  // const BlogCategory = {
  //   pagination: {
  //     pageSize: 100,
  //     page: 1,
  //   },
  //   sort: ["publishedAt:desc"],
  // }
  // const data = await graph?.request(Data, {
  //   ...AppNameVar,
  //   sort: ["Date:desc"],
  // });

  // const posts1 = data?.posts?.data;
  // const { categories } = await graph?.request(Category_Data, BlogCategory);
  return {
    props: {
      posts: posts?.data,
      // posts1: posts1,
      // blogs: blogs,
      // categories: categories,
    },
  };
}

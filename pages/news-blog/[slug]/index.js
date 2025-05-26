import { graph } from "@/Hooks/client";
import { graphcms } from "@/Hooks/graphQLClient";
import { BLOG_FIND, BLOGS, Data } from "@/Hooks/graphql";
import Footer from "@/common/footer";
import Header from "@/common/header";
import BlogDetailSec from "@/component/blogDetailPage/blogDetails";
import ReadMore from "@/component/blogDetailPage/readMoreSec";
import Cta from "@/component/blogPage/ctaSec";

export default function News_Blog({ posts, postarr, attributes }) {
  return (
    <>
      <Header />
      <BlogDetailSec posts={posts} BlogData={attributes} />
      <Cta />
      <ReadMore postarr={postarr} />
      <Footer />
    </>
  );
}

export async function getServerSideProps({ params }) {
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
  const variables_BLOG_FIND = {
    filters: {
      slug: {
        eq: params?.slug,
      },
    },
  };
  const { posts } = await graphcms?.request(
    BLOG_FIND,
    variables_BLOG_FIND,
    AppNameVar,
  );
  const BlogByCategory_Var = {
    filters: {
      appName: {
        contains: "5Paisa",
      },
      Category: {
        contains: posts?.data[0]?.attributes?.Category[0]?.name,
      },
      not: {
        slug: {
          eq: posts?.data[0]?.attributes?.slug,
        },
      },
    },
    pagination: {
      pageSize: 3,
      page: 1,
    },
    sort: ["publishedAt:desc"],
  };

  const BlogByCategory = await graphcms?.request(
    BLOG_FIND,
    BlogByCategory_Var,
    AppNameVar,
  );
  return {
    props: {
      posts: posts.data[0]?.attributes,
      postarr: BlogByCategory.posts.data,
      attributes: posts.data[0]?.attributes,
    },
  };
}
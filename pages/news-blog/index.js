import { graph, graphcms1, graphcms2 } from "@/Hooks/client";
import { graphcms } from "@/Hooks/graphQLClient";
import { ALL_FILMS_QUERY, BLOGS, CONTRIES_QUERY, Page_QUERY } from "@/Hooks/graphql";
import Footer from "@/common/footer";
import Header from "@/common/header";
import FeaturePost from "@/component/blogPage/Feature_Post";
import GetIntoTech from "@/component/blogPage/GetIntoTech";
import Latest_Post from "@/component/blogPage/Latest_Post";
import Cta from "@/component/blogPage/ctaSec";

export default function News_Blog({ posts, films, contries, Page, pageSize, page }) {
  return (
    <>
      <Header />
      <FeaturePost />
      <Latest_Post posts={posts} pageSize={pageSize} page={page} />
      <Cta />
      <GetIntoTech films={films} contries={contries} Page={Page} />
      <Footer />
    </>
  );
}

export async function getServerSideProps() {

  const AppNameVar = {
    filters: {
      appName: {
        contains: "5Paisa",
      }
    },
    pagination: {
      pageSize: 50000,
      page: 1,
    },
    sort: ["publishedAt"],
  };

  const { posts } = await graphcms.request(BLOGS, AppNameVar);
  const data = await graphcms1.request(ALL_FILMS_QUERY);
  const data1 = await graphcms2.request(CONTRIES_QUERY);
  const sortedFilms = data?.allFilms?.films?.sort((a, b) => a.episodeID - b.episodeID);
  return {
    props: {
      posts: posts?.data,
      films: sortedFilms,
      contries: data1?.continents,
      error: null,
      pageSize: 6,
      page: 1,
    },
  };
}



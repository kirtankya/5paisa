import { STRAPI_BASE_URL } from "@/config";
import { useRouter } from "next/router";

const BlogCard = ({ BlogData }) => {
  const router = useRouter();
  const redirectOnClick = () => {
    router?.push(`/news-blog/${BlogData?.slug}`);
  };
  const formatCategoryName = (str) => {
    return str
      ?.split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };
  
  return (
    <>
      <div className="blog_card_main" onClick={redirectOnClick}>
        <div className="blog_cover_image">
          {BlogData?.Card_Poster?.data?.attributes?.url && STRAPI_BASE_URL && (
            <img
              src={`${STRAPI_BASE_URL}${BlogData?.Card_Poster?.data?.attributes?.url}`}
              alt="Blog"
              title={BlogData?.title}
            />
          )}
        </div>
        <div className="blog_desc">
          {BlogData?.Category[0]?.name && <a title={formatCategoryName(BlogData?.Category[0]?.name)}>{formatCategoryName(BlogData?.Category[0]?.name)}</a>}
          {BlogData?.title && <h2 className="heading" title={BlogData?.title}>{BlogData?.title}</h2>}
          {BlogData?.excerpt && <p className="desc" title={BlogData?.excerpt}>{BlogData?.excerpt}</p>}
        </div>
        <div className="author_detail">
          {BlogData?.Author?.Picture?.data[0]?.attributes?.url &&
            STRAPI_BASE_URL && (
              <img
                src={`${STRAPI_BASE_URL}${BlogData?.Author?.Picture?.data[0]?.attributes?.url}`}
                alt="Author of Blog"
              />
            )}
          <div>
            {BlogData?.Author?.Name && (
              <p className="author_name" title={BlogData?.Author?.Name}>{BlogData?.Author?.Name}</p>
            )}
            {BlogData?.Author?.Biography && (
              <p className="date" title={BlogData?.Author?.Biography}>{BlogData?.Author?.Biography}</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export default BlogCard;

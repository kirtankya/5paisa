import BlogCard from "@/common/LatestBlogCard";
import { useRouter } from "next/router";
export default function ReadMore({ postarr }) {
  
  const router = useRouter();
  return (
    <div>
      <div className="read_more">
        <div className="container">
          <div className="read_more_heading">
            <h2 className="read_more_head" title="Read more">Read more</h2>
          </div>
          {postarr && (
            <div className="latest_post_grid_card">
              {postarr?.slice(0, 3).map(({ attributes }, i) => {
                return <BlogCard BlogData={attributes} key={i} />;
              })}
            </div>
          )}
          <div className="read_more_btn" onClick={() => router.push('/news-blog')}>
            <button>See more on 5 Paisa</button>
          </div>
        </div>
      </div>
    </div>
  );
}

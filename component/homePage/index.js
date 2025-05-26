import BlogData from "@/blogData";
import BlogCard from "@/common/LatestBlogCard";
import { useRouter } from "next/router";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { useMemo, useState } from "react";
import Blog_Card from "@/common/blogCard";
import Social_Media_Sec from "@/common/socialMedia";
import Trend_Topic from "../Trend_Topic";
import Subscription from "../subscription";
import FAQs from "../FAQs";
import Customer_News from "@/common/customerNews";
import Category from "../category";
import Price_Sec from "../price";

const Latest_Blog = "assets/images/Latest_Blog.png";
const Author = "assets/images/blog_author.png";
const blogs = [
  {
    img: Latest_Blog,
    webName: "daily.dev",
    heading: "Source Spotlight by daily.dev: Product Hunt 💡",
    desc: "Explore the collaboration between daily.dev and Product Hunt, two platforms dedicated to serving the tech and developer community. Learn about the impact of their partnership on organic traffic and engagement, the benefits they offer to their communities, and the opportunities they provide for developers. Discover how they work together to amplify reach and foster a connected community.",
    author_img: Author,
    author_name: "Nimrod Kramer",
    date: "August 2, 2023",
  },
  {
    img: Latest_Blog,
    webName: "daily.dev",
    heading: "Source Spotlight by daily.dev: Product Hunt 💡",
    desc: "Explore the collaboration between daily.dev and Product Hunt, two platforms dedicated to serving the tech and developer community. Learn about the impact of their partnership on organic traffic and engagement, the benefits they offer to their communities, and the opportunities they provide for developers. Discover how they work together to amplify reach and foster a connected community.",
    author_img: Author,
    author_name: "Nimrod Kramer",
    date: "August 2, 2023",
  },
  {
    img: Latest_Blog,
    webName: "daily.dev",
    heading: "Source Spotlight by daily.dev: Product Hunt 💡",
    desc: "Explore the collaboration between daily.dev and Product Hunt, two platforms dedicated to serving the tech and developer community. Learn about the impact of their partnership on organic traffic and engagement, the benefits they offer to their communities, and the opportunities they provide for developers. Discover how they work together to amplify reach and foster a connected community.",
    author_img: Author,
    author_name: "Nimrod Kramer",
    date: "August 2, 2023",
  },
];
const Browser = "assets/images/cta_browser.svg";

export default function HomePage({ posts, posts1 }) {
  const [search, setSearch] = useState("");
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);
  const itemPerpage = 3;
  const indexOfLastItem = currentPage * itemPerpage;
  const indexOfFirstItem = indexOfLastItem - itemPerpage;
  const currentItems = BlogData.BlogMain.slice(
    indexOfFirstItem,
    indexOfLastItem
  );
  const totalPages = Math.ceil(BlogData.BlogMain.length / itemPerpage);
  const [isSwitch, setIsSwitch] = useState(true);

  // const handleToggle = () => {
  //   setIsSwitch(!isSwitch);
  // };
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleOnclick = (slug) => {
    router?.push(`/news-blog/blog/${slug}`);
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleOnChange = (ev) => {
    setSearch(ev.target.value);
  };

  const rating = [
    {
      star: <MdOutlineStarPurple500 />,
    },
    {
      star: <MdOutlineStarPurple500 />,
    },
    {
      star: <MdOutlineStarPurple500 />,
    },
    {
      star: <MdOutlineStarPurple500 />,
    },
    {
      star: <MdOutlineStarPurple500 />,
    },
  ];

  const filteredData = useMemo(() => {
    return BlogData.category.map((el) => ({
      ...el,
      [el.Name]: el[el.Name].filter((item) =>
        item.title.toLowerCase().includes(search.toLowerCase())
      ),
    }));
  }, [search]);


  return (
    <main className="Homepage">
      <div className="herobanner">
        <div className="container">
          <div className="herobanner_heading">
            <h2 className="heading">
              Where developers <span>suffer together</span>
            </h2>
            <p className="desc">
              We know how hard it is to be a developer. It doesn’t have to be.
              Personalized news feed, dev communities and search, much better than
              what’s out there.
            </p>
            <button onClick={() => router.push("/contact-us")}>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                height="30"
                width="30"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path d="M21 8V7l-3 2-3-2v1l3 2 3-2zm1-5H2C.9 3 0 3.9 0 5v14c0 1.1.9 2 2 2h20c1.1 0 1.99-.9 1.99-2L24 5c0-1.1-.9-2-2-2zM8 6c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm6 12H2v-1c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1zm8-6h-8V6h8v6z"></path>
              </svg>
              Contact Us
            </button>
          </div>
          <div className="blog_cards">
            {posts && (
              <div className="latest_post_grid_card">
                {
                  posts.slice(0, 3).map(({ attributes }, i) => {
                    return <BlogCard BlogData={attributes} key={i} />
                  })
                }
              </div>
            )}
          </div>
          <div
            className="read_blog_btn"
            onClick={() => router.push("/news-blog")}
          >
            <button title="Read All Blogs">
              Read All Blogs
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 256 256"
                height="20"
                width="20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M224.49,136.49l-72,72a12,12,0,0,1-17-17L187,140H40a12,12,0,0,1,0-24H187L135.51,64.48a12,12,0,0,1,17-17l72,72A12,12,0,0,1,224.49,136.49Z"></path>
              </svg>
            </button>
          </div>
          <section className="customer_News">
            <Customer_News />
          </section>
          <section className="blog_category_main">
            <Category />
          </section>
          <section className="social_media_sec">
            <Social_Media_Sec />
          </section>
          <section className="Trend_Blog">
            <Trend_Topic />
          </section>
          <section className="tool_category">
            <div className="category_text">
              <h2 title="Testimonials">Testimonials</h2>
              <div className="all_aligmnent">
                <p title="Review Us">Review Us</p>
                <svg
                  viewBox="0 0 22 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_280_332)">
                    <path
                      d="M21.7479 12.5161L21.7472 12.5151L17.2568 7.13283C16.9204 6.72962 16.3762 6.73112 16.0414 7.13635C15.7066 7.54152 15.7079 8.19687 16.0443 8.60013L19.0591 12.2137H0.859375C0.384742 12.2137 0 12.6771 0 13.2488C0 13.8204 0.384742 14.2838 0.859375 14.2838H19.0591L16.0443 17.8974C15.7079 18.3007 15.7066 18.956 16.0414 19.3612C16.3763 19.7665 16.9205 19.7679 17.2568 19.3647L21.7472 13.9824L21.748 13.9815C22.0846 13.5768 22.0835 12.9194 21.7479 12.5161Z"
                      fill="white"
                    ></path>
                  </g>
                  <defs>
                    <clipPath id="clip0_280_332">
                      <rect width="22" height="26.4975" fill="white"></rect>
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
            <span title="Hear what our users have to say in their own words">Hear what our users have to say in their own words</span>
            <div className="testimonials_box_main">
              {BlogData.Testiomonial.map((el, index) => {
                return (
                  <>
                    <div key={index} className="testimonial_Card">
                      <div className="testimonials_top">
                        <div className="testimonials_icons">
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth="0"
                            viewBox="0 0 24 24"
                            height="30px"
                            width="30px"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M4.58341 17.3211C3.55316 16.2274 3 15 3 13.0103C3 9.51086 5.45651 6.37366 9.03059 4.82318L9.92328 6.20079C6.58804 8.00539 5.93618 10.346 5.67564 11.822C6.21263 11.5443 6.91558 11.4466 7.60471 11.5105C9.40908 11.6778 10.8312 13.159 10.8312 15C10.8312 16.933 9.26416 18.5 7.33116 18.5C6.2581 18.5 5.23196 18.0095 4.58341 17.3211ZM14.5834 17.3211C13.5532 16.2274 13 15 13 13.0103C13 9.51086 15.4565 6.37366 19.0306 4.82318L19.9233 6.20079C16.588 8.00539 15.9362 10.346 15.6756 11.822C16.2126 11.5443 16.9156 11.4466 17.6047 11.5105C19.4091 11.6778 20.8312 13.159 20.8312 15C20.8312 16.933 19.2642 18.5 17.3312 18.5C16.2581 18.5 15.232 18.0095 14.5834 17.3211Z"></path>
                          </svg>
                        </div>
                        <div className="testimonials_details">
                          <p title={el.detail}>{el.detail}</p>
                        </div>
                      </div>
                      <div className="testiomonials_bottom">
                        <div className="testiomonials_profile">
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth="0"
                            viewBox="0 0 512 512"
                            height="30px"
                            width="30px"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm2 96a72 72 0 1 1-72 72 72 72 0 0 1 72-72zm-2 288a175.55 175.55 0 0 1-129.18-56.6C135.66 329.62 215.06 320 256 320s120.34 9.62 129.18 55.39A175.52 175.52 0 0 1 256 432z"></path>
                          </svg>
                          <div className="testiomonials_name">
                            <p title={el.name}>{el.name}</p>
                          </div>
                        </div>
                        {/* <div className="testiomonials_rating">
                        {rating.map((el) => {
                          return <>{rating}</>;
                        })}
                      </div> */}
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </section>
          <section className="FaqSection">
            <FAQs />
          </section>
          <section className="subscription">
            <Subscription />
          </section>
        </div>
      </div>
    </main>
  );
}

import Share_Model from "@/common/shareModel";
import { Editor } from "@/component/layout/Editor/Editor";
import { STARPI_URI, STRAPI_BASE_URL } from "@/config";
import moment from "moment";
import { useEffect, useRef, useState } from "react";

export default function BlogDetailSec({ posts, BlogData }) {
  const [dropdown, setDropdown] = useState(null);
  const [IsTOC, SetTOC] = useState(true);
  const [currentID, setCurrentID] = useState("");
  // const [isVisible, setIsVisible] = useState(true);
  // // const [activeId, setActiveId] = useState(null);
  const answerRefs = useRef([]);
  useEffect(() => {
    const handleScroll = () => {
      const headings = document.querySelectorAll(
        ".blog_content_text h2[id]"
      );
      headings?.forEach((heading) => {
        const bounding = heading.getBoundingClientRect();
        if (
          bounding.top >= 0 &&
          bounding.bottom <=
          (window.innerHeight || document.documentElement.clientHeight)
        ) {
          setCurrentID(heading.getAttribute("id"));
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const MakeSlug = (slug) => {
    return `${slug?.trim()?.toLowerCase()?.replace(/\s+/g, "-")?.trim()}`;
  };
  const LetsScroll = (Title) => {
    const slug = MakeSlug(Title);
    const el = document.getElementById(slug);
    if (el) {
      const Position = el.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: Position - 135,
        behavior: "smooth",
      });
      setCurrentID(slug);
    }
  };

  useEffect(() => {
    if (dropdown !== null) {
      answerRefs.current[
        dropdown
      ].style.height = `${answerRefs.current[dropdown].scrollHeight}px`;
    }
  }, [dropdown]);

  return (
    <section className="Blog_details_sec">
      <div className="container">
        <div className="Blog_Aligment">
          <div className="Blog_detail_heading">
            {posts?.title && (
              <h2 className="Heading" title={posts?.title}>
                {posts?.title}
              </h2>
            )}
            {posts?.Author?.Biography && (
              <p className="Date">{moment(posts?.publishedAt)?.format("LL")}</p>
            )}
          </div>
          <div className="shareModel">
            <Share_Model BlogData={BlogData} />
          </div>
        </div>
        {STRAPI_BASE_URL && posts?.coverImage?.data?.attributes?.url && (
          <img
            title={posts?.title}
            src={`${STRAPI_BASE_URL}${posts?.coverImage?.data?.attributes?.url}`}
            alt="Card Banner"
          />
        )}
        <div className="blog_content_flex_main">
          <div className="blog_content">
            {/* {STRAPI_BASE_URL && posts?.coverImage?.data?.attributes?.url && (
              <img
                title={posts?.title}
                src={`${STRAPI_BASE_URL}${posts?.coverImage?.data?.attributes?.url}`}
                alt="Card Banner"
              />
            )} */}
            <div className="content_article">
              <p className="article_icon">🎯</p>
              {posts?.excerpt && (
                <p className="desc" title={`🎯${posts?.excerpt}`}>
                  {posts?.excerpt}
                </p>
              )}
            </div>
            {posts?.MarkDown_Content && (
              <div className="blog_content_text">
                <Editor Data={posts?.MarkDown_Content || ""} />
              </div>
            )}
            {/* <div className="FAQs">
              {posts?.Faq_Schema[0]?.map((el, index) => (
                <div
                  onClick={() => handleOnClick(index)}
                  key={index}
                  className={`FAQ ${dropdown === index ? "open" : ""}`}
                >
                  <div className="FAQ_Question">
                    <div className="FAQs_Alignment">
                      <p title={el.Question}>{el.Question}</p>
                      <div
                        className={`icon ${dropdown === index ? "rotate" : ""}`}
                      >
                        {dropdown === index ? (
                          <svg
                            stroke="currentColor"
                            fill="none"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            height="20px"
                            width="20px"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                          </svg>
                        ) : (
                          <svg
                            stroke="currentColor"
                            fill="none"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            height="20px"
                            width="20px"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <line x1="12" y1="5" x2="12" y2="19"></line>
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                          </svg>
                        )}
                      </div>
                    </div>
                  </div>
                  <div
                    className={`FAQ_Answer ${dropdown === index ? "open" : ""}`}
                    ref={(el) => (answerRefs.current[index] = el)}
                    style={{
                      height:
                        dropdown === index
                          ? `${answerRefs.current[index]?.scrollHeight}px`
                          : "0",
                    }}
                  >
                    {dropdown === index && (
                      <span title={el.Answer}>{el.Answer}</span>
                    )}
                  </div>
                </div>
              ))}
            </div> */}
          </div>
          <>
            <div className="article_details">
              <div className="author_detail">
                <p>Author</p>
                <div className="author_name_photo_flex">
                  <div className="author_image">
                    {posts?.Author?.Picture?.data[0]?.attributes?.url &&
                      STARPI_URI && (
                        <img
                          src={`${STARPI_URI}${posts?.Author?.Picture?.data[0]?.attributes?.url}`}
                          alt="Author"
                        />
                      )}
                  </div>
                  <div className="author_name">
                    {posts?.Author?.Name && <h4>{posts?.Author?.Name}</h4>}
                    {posts?.Author?.Name && <p>@{posts?.Author?.Name}</p>}
                  </div>
                </div>
                <p>Related tags on daily.dev</p>
                <h5>#dailydev</h5>
              </div>
              <div className="table_contents">
                {BlogData?.Table_Of_Contents?.Data && (
                  <>
                    <p
                      className="table_heading"
                      onClick={() => {
                        SetTOC(!IsTOC);
                      }}
                    >
                      TABLE OF CONTENTS{" "}
                      <svg
                        className={IsTOC ? "Up" : "Down"}

                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 448 512"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
                      </svg>

                    </p>
                    {IsTOC && (
                      <ol className={`table_detail ${IsTOC ? "visible" : "hidden"
                        }`}>
                        {BlogData?.Table_Of_Contents?.Data?.map((Data, i) => {
                          return (
                            <li key={i}>
                              <span
                                title={Data?.Title?.trim()}
                                onClick={() => LetsScroll(Data?.Title)}
                                className={`table_details ${MakeSlug(Data?.Title) === currentID ? "active" : ""
                                  }`}

                              >
                                {Data?.Title?.trim()}
                              </span>
                            </li>
                          );
                        })}
                      </ol>
                    )}
                  </>
                )}
              </div>
              <div className="table_content">
                {/* <div className="table_content_1"> ... </div> */}
                <div className="table_content_2">
                  {posts?.Card_Poster?.data?.attributes?.url && STARPI_URI && (
                    <img
                      src={`${STARPI_URI}${posts?.Card_Poster?.data?.attributes?.url}`}
                      alt="Blog_post"
                    />
                  )}
                  <h3
                    className="heading_h3"
                    title="Why not level up your reading with daily.dev?"
                  >
                    Why not level up your reading with daily.dev?
                  </h3>
                  <p
                    className="para"
                    title=" Stay up-to-date with the latest developer news every time you
                  open a new tab."
                  >
                    Stay up-to-date with the latest developer news every time
                    you open a new tab.
                  </p>
                  <a
                    href="https://chromewebstore.google.com/detail/dailydev-the-homepage-dev/jlmpjdjjbgclbocgajdjefcidcncaied"
                    target="_blank"
                    title=" Start reading - Free forever"
                  >
                    Start reading - Free forever
                  </a>
                </div>
              </div>
            </div>
          </>
        </div>
      </div>
    </section>
  );
}

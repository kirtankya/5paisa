import BlogData from "@/blogData"; // Assuming this is correct for your project
import Client_Card from "@/common/clientCard";
import { STARPI_URI } from "@/config";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function About_us_page() {
  const ourTeam = [
    {
      img: "https://i.postimg.cc/C1jXcvTg/jens-baumann-1024x1024.jpg",
      name: "Johan Doe",
      position: "Founder & CEO",
    },
    {
      img: "https://i.postimg.cc/pT0JZ8GZ/57a460dbd7a7b4fb74e9f49fe5b389d1.jpg",
      name: "Sarah Williams",
      position: "Project Manager",
    },
    {
      img: "https://i.postimg.cc/Dw9fMyY3/Fotolia-10430859-Subscription-XXL-scaled.jpg",
      name: "Jane Smith",
      position: "Founder & CEO",
    },
    {
      img: "https://i.postimg.cc/bYB7TVBK/img2-large.jpg",
      name: "David Brown",
      position: "Construction Foreman",
    },
  ];
  return (
    <div className="About_detail_sec">
      <div className="container">
        <div className="about_detail_heading">
          <>
            <h1
              className="Heading"
              title="daily.dev’s First Ever Town Hall: Our Story, Updates, and a
              Community AMA"
            >
              daily.dev’s First Ever Town Hall: Our Story, Updates, and a
              Community AMA
            </h1>
          </>
        </div>
        <div className="about_detail_cover_image">
          <>
            <LazyLoadImage
              loading="lazy"
              src="https://i.postimg.cc/tCCLDKdz/about-us.webp"
              alt="about-us"
            />
          </>
        </div>
        <div className="about_detail_main">
          <div className="about_detail_heading">
            <>
              <h2 className="Heading-1" title="What We Offer">
                What We Offer
              </h2>
            </>
          </div>
          <div className="about_us_card_main">
            {BlogData.About.map((el, index) => (
              <div key={index} className="about_us-card">
                <>
                  <div className="about_us_icon">
                    <LazyLoadImage
                      loading="lazy"
                      src={el.icon}
                      alt={el.title}
                    />
                  </div>
                  <div className="about_us_details">
                    <h3 title={el.title}>{el.title}</h3>
                    <p title={el.detail}>{el.detail}</p>
                  </div>
                  <div className="about_us">
                    <button title="Read more">
                      Read more
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 448 512"
                        height="200px"
                        width="200px"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"></path>
                      </svg>
                    </button>
                  </div>
                </>
              </div>
            ))}
          </div>
          <div className="about_detail_heading">
            <>
              <h2
                className="Heading-1"
                title="Our Blog Journey: From Humble Beginnings to Inspiring Adventures"
              >
                Our Blog Journey: From Humble Beginnings to Inspiring Adventures
              </h2>
            </>
          </div>
          <div className="about_us_main_box">
            {BlogData.AboutDetail.map((el, index) => (
              <>
                <div key={index} className="about_box">
                  <div className="about_us_image">
                    <LazyLoadImage loading="lazy" src={el.img} alt={el.title} />
                  </div>
                  <div className="about_detail">
                    <h3 className="Heading-1" title={el.title}>
                      {el.title}
                    </h3>
                    <p title={el.detail}>{el.detail}</p>
                  </div>
                </div>
              </>
            ))}
          </div>
          <div className="about_us_main_vison">
            <div className="about_us_aligments">
              <>
                <div className="about_us_image">
                  <LazyLoadImage
                    loading="lazy"
                    src="https://i.postimg.cc/26WWd2TD/1687903064-en-idei-club-p-modern-building-background-dizain-krasivo-2.jpg"
                    alt="image"
                  />
                </div>
                <div className="about-detail">
                  <div className="about_detail_text">
                    <h2 title="Empowering Your Vision: Request Quote">
                      Empowering Your Vision: Request Quote
                    </h2>
                    <p title="we turn ideas into reality. Whether you're launching a new
                      product, building a brand, or scaling your digital
                      presence, we're here to support your goals with tailored
                      solutions.">
                      we turn ideas into reality. Whether you're launching a new
                      product, building a brand, or scaling your digital
                      presence, we're here to support your goals with tailored
                      solutions.
                    </p>
                  </div>
                  <div className="about_us_btn">
                    <button title="Request Quote">
                      Request Quote
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
                        <path d="M5 12h14"></path>
                        <path d="m12 5 7 7-7 7"></path>
                      </svg>
                    </button>
                    <button title="Learn More">Learn More</button>
                  </div>
                </div>
              </>
            </div>
          </div>
          <div className="about_us_team">
            <div className="about_detail">
              <>
                <h2 className="Heading-1" title="Our Team">
                  Our Team
                </h2>
                <p className="Heading-2" title="Meet Our Dedicated Team">
                  Meet Our Dedicated Team
                </p>
              </>
            </div>
            <div className="about_detail_text">
              <>
                <p title="Our team is a passionate group of professionals committed to
                  delivering excellence. Each member brings unique skills and a
                  collaborative spirit, ensuring that we achieve our goals with
                  innovation and integrity. Together, we work tirelessly to
                  provide the best service and solutions to our clients.">
                  Our team is a passionate group of professionals committed to
                  delivering excellence. Each member brings unique skills and a
                  collaborative spirit, ensuring that we achieve our goals with
                  innovation and integrity. Together, we work tirelessly to
                  provide the best service and solutions to our clients.
                </p>
              </>
            </div>
            <div className="main_our_team">
              <>
                {ourTeam.map((el, index) => {
                  return (
                    <div key={index} className="our_team">
                      <div className="profile_pic">
                        <LazyLoadImage
                          loading="lazy"
                          src={el.img}
                          alt={el.name}
                        />
                      </div>
                      <h2 className="Heading-1" title={el.name}>
                        {el.name}
                      </h2>
                      <p title={el.position}>{el.position}</p>
                    </div>
                  );
                })}
              </>
            </div>
          </div>
          <div className="client_testimonial">
            <div className="client_heading">
              <>
                <h1 className="Heading-1" title="Testimonials">Testimonials</h1>
              </>
            </div>
            <>
              <Client_Card />
            </>
          </div>
        </div>
      </div>
    </div>
  );
}

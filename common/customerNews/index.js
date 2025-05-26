
import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Slider from 'react-slick';

export default function Customer_News() {
    const sliderImage = [
        {
            img: "https://i.postimg.cc/DZbKxwdV/d2ce8a2d1465fe4bc6f89ab69c58438e.jpg",
            content: "Latest updates and analysis on the stock market...",
            detail: 'Stay informed with the latest updates and in-depth analysis on the stock market. Discover trends, predictions, and expert opinions to help you make informed investment decisions. Understand the factors driving the market movements and how they could impact your portfolio.',
        },
        {
            img: "https://i.postimg.cc/Y0sqHfB9/5655ce1368b9431187f8963c94ed487a.jpg",
            content: "The most exciting tech innovations of the year...",
            detail: 'Explore the cutting-edge technology innovations that are shaping the future. From groundbreaking advancements in AI to the latest in consumer electronics, get insights into the most exciting tech developments. Learn how these innovations are transforming industries and enhancing our daily lives.',
        },
        {
            img: "https://i.postimg.cc/9fpnfyct/159b60f7e6a2012d36f5876bf10e4c3c.jpg",
            content: "A travel guide to the beautiful Alps...",
            detail: 'Plan your next adventure with our comprehensive travel guide to the Alps. Discover the breathtaking landscapes, charming villages, and exhilarating outdoor activities that make the Alps a top destination. Find tips on the best times to visit, must-see attractions, and unique experiences to enrich your journey.',
        },
        {
            img: "https://i.postimg.cc/PJqmwMCS/fitness-stretching.jpg",
            content: "5 Tips to Build a Daily Movement Routine....",
            detail: '"Enhance your fitness journey with these practical tips for building a daily movement routine. Learn how to incorporate simple exercises into your daily schedule, stay motivated, and achieve your fitness goals. From stretching to strength training, discover effective strategies to keep you active and healthy.',
        }
    ]

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        initialSlide: 0,
    };

    return (
        <div className="slider-container">
            <Slider {...settings}>
                {
                    sliderImage.map((el, index) => {
                        return (
                            <>
                                <div key={index} className="customer_Image">
                                    <img src={el.img} alt="banner-image" />
                                    <div className="customer_Content">
                                        <h3 title={el.content}>{el.content}</h3>
                                        <p title={el.detail}>{el.detail}</p>
                                    </div>
                                </div>
                            </>
                        )
                    })
                }
            </Slider>
        </div>
    );
}

import BlogData from "@/blogData";
import React from "react";
import Slider from "react-slick";
import { IoIosStar } from "react-icons/io";

function Client_Card() {
    const starCount = 5;
    const stars = Array.from({ length: starCount }, (_, index) => <IoIosStar key={index} />);

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className="slider-container">
            <Slider {...settings}>
                {
                    BlogData.Client.map((el, index) => {
                        return (
                            <>
                                <>
                                    <div key={index} className="box-detail" title={el.title}>
                                        <p>{el.title}</p>
                                        <p title={el.detail}>{el.detail}</p>
                                        <div className="rating">
                                            {stars}
                                        </div>
                                    </div>
                                </>
                            </>
                        );
                    })
                }
            </Slider>
        </div>
    );
}

export default Client_Card;

import React from "react";

export default function Category() {
    const Blog_Category = [
        {
            category: "Stock-Market",
            img: "https://i.postimg.cc/yx4Ls5gG/stock-market.png",
        },
        {
            category: "Technology",
            img: "https://i.postimg.cc/850V4TY6/innovation.png",
        },
        {
            category: "Bussiness",
            img: "https://i.postimg.cc/MHBKjcGT/cooperation.png",
        },
        {
            category: "Sports",
            img: "https://i.postimg.cc/Kz6mFZ5y/sports.png",
        },
        {
            category: "Food",
            img: "https://i.postimg.cc/HkYdTvbj/restaurant.png",
        },
        {
            category: "Travel",
            img: "https://i.postimg.cc/8kLSMgHj/world.png",
        },
        {
            category: "Stock-Market",
            img: "https://i.postimg.cc/yx4Ls5gG/stock-market.png",
        },
        {
            category: "Technology",
            img: "https://i.postimg.cc/850V4TY6/innovation.png",
        },
        {
            category: "Bussiness",
            img: "https://i.postimg.cc/MHBKjcGT/cooperation.png",
        },
        {
            category: "Sports",
            img: "https://i.postimg.cc/Kz6mFZ5y/sports.png",
        },
        {
            category: "Food",
            img: "https://i.postimg.cc/HkYdTvbj/restaurant.png",
        },
        {
            category: "Travel",
            img: "https://i.postimg.cc/8kLSMgHj/world.png",
        },
        {
            category: "Stock-Market",
            img: "https://i.postimg.cc/yx4Ls5gG/stock-market.png",
        },
        {
            category: "Technology",
            img: "https://i.postimg.cc/850V4TY6/innovation.png",
        },
        {
            category: "Bussiness",
            img: "https://i.postimg.cc/MHBKjcGT/cooperation.png",
        },
        {
            category: "Sports",
            img: "https://i.postimg.cc/Kz6mFZ5y/sports.png",
        },
    ];
    return (
        <>
            <div className="marque_block">
                <div className="Blog_Category">
                    {Blog_Category.map((el, index) => {
                        return (
                            <>
                                <div key={index} title={el.category} className="marque">
                                    <div className="box">
                                        <div className="category_Icon">
                                            <img src={el.img} alt={el.category} />
                                        </div>
                                        <div className="category_title">
                                            <p title={el.category}>{el.category}</p>
                                        </div>
                                    </div>
                                </div>
                            </>
                        );
                    })}
                </div>
                <div className="Blog_Category">
                    {Blog_Category.map((el, index) => {
                        return (
                            <>
                                <div key={index} title={el.category} className="marque">
                                    <div className="box">
                                        <div className="category_Icon">
                                            <img src={el.img} alt={el.category} />
                                        </div>
                                        <div className="category_title">
                                            <p title={el.category}>{el.category}</p>
                                        </div>
                                    </div>
                                </div>
                            </>
                        );
                    })}
                </div>
            </div>
        </>
    );
}

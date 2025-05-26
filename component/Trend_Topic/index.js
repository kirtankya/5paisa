import Link from 'next/link'
import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'

export default function Trend_Topic() {
    const TrendBlog = [
        {
            img: "https://i.postimg.cc/bvR0k703/stock-brand-278666-hor-clsc.webp",
            title: "Travel",
        },
        {
            img: "https://i.postimg.cc/90Bzn2Mn/Best-Food-Sources-Of-Vitamin-Bs-893716434.jpg",
            title: "Food",
        },
        {
            img: "https://i.postimg.cc/MHtKYY3k/blockchain-digital-icon-illustration-dgg9svms4ez6qqeo.jpg",
            title: "Technology"
        },
        {
            img: 'https://i.postimg.cc/0jNdnV5D/07062022.jpg',
            title: 'Stock-Market',
        }
    ]
    return (
        <div className='Trending_Blog'>
            <div className="aligment">
                <div className="Blog_title">
                    <h2 title='Trending Topics'>Trending Topics</h2>
                </div>
                <div className="see_all_blog_subTitle">
                    <p title='See All Topics'>See All Topics</p>
                </div>
            </div>
            <div className="Blog_Banner">
                {
                    TrendBlog.map((el, index) => {
                        return (
                            <>
                                <div className='Blog_Banner_Aligment'>
                                    <Link href='/news-blog' key={index} className="Blog_Banner_Img">
                                        <LazyLoadImage title={el.title} loading='lazy' src={el.img} alt={el.title} />
                                    </Link>
                                    <div className="Blog_Banner_content">
                                        <p title={el.title}>{el.title}</p>
                                    </div>
                                </div>
                            </>
                        )
                    })
                }
            </div>
        </div>
    )
}

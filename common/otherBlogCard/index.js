
import React from 'react';
import { useRouter } from 'next/router';
import BlogData from '@/blogData';

export default function Other_Blog_card() {
    const router = useRouter();

    const handleOnclick = () => {
        router?.push(`/news-blog`);
    }

    return (
        <div className="latest_post_grid_card">
            {
                BlogData.Blog.map((el, index) => (
                    <div key={index} className="blog_card">
                        <div className="blog_card_image">
                            <img src={el.img} alt={el.title} />
                        </div>
                        <div className="blog_card_content">
                            <h3 className="title">{el.title}</h3>
                            <p className="desc">{el.detail}</p>
                            <div className="blog_data">
                                <span>{el.date}</span>
                                <button onClick={() => handleOnclick(el.slug)}>Read More</button>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

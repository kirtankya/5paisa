import { STRAPI_BASE_URL } from "@/config";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Share_Model from "../shareModel";

export default function Blog_Card({ BlogData }) {
    const route = useRouter();
    const handleOnclick = () => {
        route.push(`/news-blog`)
    }

    const redirectOnClick = () => {
        route.push(`/news-blog/${BlogData?.slug}`)
    }

    return (
        <>
            <div onClick={redirectOnClick} className="category_box">
                <div className="category_img">
                    {BlogData?.Card_Poster?.data?.attributes?.url && STRAPI_BASE_URL && (
                        <LazyLoadImage
                            loading="lazy"
                            src={`${STRAPI_BASE_URL}${BlogData?.Card_Poster?.data?.attributes?.url}`}
                            alt="Blog"
                            title={BlogData?.title}
                        />
                    )}
                    <div className="category_button">
                        {BlogData?.Category?.[0]?.name && (
                            <button onClick={handleOnclick}>{BlogData?.Category[0].name}</button>
                        )}
                    </div>
                </div>
                <div className="category_desc">
                    <div className="category_items">
                        <div className="category_time_Aligment">
                            <div className="time_icon">
                                <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    strokeWidth="0"
                                    viewBox="0 0 1024 1024"
                                    height="15px"
                                    width="15px"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M960 95.888l-256.224.001V32.113c0-17.68-14.32-32-32-32s-32 14.32-32 32v63.76h-256v-63.76c0-17.68-14.32-32-32-32s-32 14.32-32 32v63.76H64c-35.344 0-64 28.656-64 64v800c0 35.343 28.656 64 64 64h896c35.344 0 64-28.657 64-64v-800c0-35.329-28.656-63.985-64-63.985zm0 863.985H64v-800h255.776v32.24c0 17.679 14.32 32 32 32s32-14.321 32-32v-32.224h256v32.24c0 17.68 14.32 32 32 32s32-14.32 32-32v-32.24H960v799.984zM736 511.888h64c17.664 0 32-14.336 32-32v-64c0-17.664-14.336-32-32-32h-64c-17.664 0-32 14.336-32 32v64c0 17.664 14.336 32 32 32zm0 255.984h64c17.664 0 32-14.32 32-32v-64c0-17.664-14.336-32-32-32h-64c-17.664 0-32 14.336-32 32v64c0 17.696 14.336 32 32 32zm-192-128h-64c-17.664 0-32 14.336-32 32v64c0 17.68 14.336 32 32 32h64c17.664 0 32-14.32 32-32v-64c0-17.648-14.336-32-32-32zm0-255.984h-64c-17.664 0-32 14.336-32 32v64c0 17.664 14.336 32 32 32h64c17.664 0 32-14.336 32-32v-64c0-17.68-14.336-32-32-32zm-256 0h-64c-17.664 0-32 14.336-32 32v64c0 17.664 14.336 32 32 32h64c17.664 0 32-14.336 32-32v-64c0-17.68-14.336-32-32-32zm0 255.984h-64c-17.664 0-32 14.336-32 32v64c0 17.68 14.336 32 32 32h64c17.664 0 32-14.32 32-32v-64c0-17.648-14.336-32-32-32z"></path>
                                </svg>
                            </div>
                            <div className="category_time">
                                {BlogData?.Author?.Biography && (
                                    <p className="date">{BlogData?.Author?.Biography}</p>
                                )}
                            </div>
                        </div>
                        <div className="aligment">
                            <div className="bookMark_icon">
                                <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    strokeWidth="0"
                                    viewBox="0 0 24 24"
                                    height="20px"
                                    width="20px"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <g id="Bookmark">
                                        <path d="M17.6,21.945a1.483,1.483,0,0,1-1.01-.4l-4.251-3.9a.5.5,0,0,0-.68,0L7.409,21.545a1.5,1.5,0,0,1-2.516-1.1V4.57a2.5,2.5,0,0,1,2.5-2.5h9.214a2.5,2.5,0,0,1,2.5,2.5V20.442a1.481,1.481,0,0,1-.9,1.374A1.507,1.507,0,0,1,17.6,21.945ZM12,16.51a1.5,1.5,0,0,1,1.018.395l4.251,3.9a.5.5,0,0,0,.839-.368V4.57a1.5,1.5,0,0,0-1.5-1.5H7.393a1.5,1.5,0,0,0-1.5,1.5V20.442a.5.5,0,0,0,.839.368L10.983,16.9A1.5,1.5,0,0,1,12,16.51Z"></path>
                                    </g>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="category_title">
                        {BlogData?.title && (
                            <h2 className="heading" title={BlogData?.title}>
                                {BlogData?.title}
                            </h2>
                        )}
                    </div>
                    <div className="category_description">
                        {BlogData?.excerpt && (
                            <p className="desc" title={BlogData?.excerpt}>
                                {BlogData?.excerpt}
                            </p>
                        )}
                    </div>
                    <div className="category_aligment">
                        <div className="category_read_more">
                            <Link href={`/news-blog/${BlogData?.slug}`}>
                                <button title="Read More">
                                    <span>Read More</span>
                                    <svg
                                        stroke="currentColor"
                                        fill="currentColor"
                                        strokeWidth="0"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M13.22 19.03a.75.75 0 0 1 0-1.06L18.19 13H3.75a.75.75 0 0 1 0-1.5h14.44l-4.97-4.97a.749.749 0 0 1 .326-1.275.749.749 0 0 1 .734.215l6.25 6.25a.75.75 0 0 1 0 1.06l-6.25 6.25a.75.75 0 0 1-1.06 0Z"></path>
                                    </svg>
                                </button>
                            </Link>
                        </div>
                        <Share_Model BlogData={BlogData} />
                    </div>
                </div>
            </div>
        </>
    );
}

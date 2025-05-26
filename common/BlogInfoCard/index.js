
import React from "react";

export default function Blog_Info_Card({ films, error, countDisplay }) {
    if (!films && !error) {
        return (
            <p>Loading.......</p>
        )
    }
    if (error) {
        return (
            <p>Error</p>
        )
    }
    return (
        <div className="container">
            <div className="card_into_main" >
                {films.slice(0, countDisplay)?.map((film) => (
                    <div key={film?.episodeID} className="card_into_card">
                        <h2 className="heading">{film?.title}</h2>
                        <p className="desc">Created: {film?.created}</p>
                        <p className="desc">Episode ID: {film?.episodeID}</p>
                        <span className="text">Opening Crawl: {film?.openingCrawl}</span>
                        <a href="#">Read more</a>
                    </div>
                ))}
            </div>
        </div>
    );
}

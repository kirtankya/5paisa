
import React from "react";


const cardData = [
  {
    heading: "Collection JS Essentials for Developers",
    desc: "Learn about the essentials of using arrays, sets, maps, and weak maps in JavaScript for efficient data management. Explore real-world examples and best practices for developers.",
  },
  {
    heading: "Collection JS Essentials for Developers",
    desc: "Learn about the essentials of using arrays, sets, maps, and weak maps in JavaScript for efficient data management. Explore real-world examples and best practices for developers.",
  },
  {
    heading: "Collection JS Essentials for Developers",
    desc: "Learn about the essentials of using arrays, sets, maps, and weak maps in JavaScript for efficient data management. Explore real-world examples and best practices for developers.",
  },
  {
    heading: "Collection JS Essentials for Developers",
    desc: "Learn about the essentials of using arrays, sets, maps, and weak maps in JavaScript for efficient data management. Explore real-world examples and best practices for developers.",
  },
  {
    heading: "Collection JS Essentials for Developers",
    desc: "Learn about the essentials of using arrays, sets, maps, and weak maps in JavaScript for efficient data management. Explore real-world examples and best practices for developers.",
  },
  {
    heading: "Collection JS Essentials for Developers",
    desc: "Learn about the essentials of using arrays, sets, maps, and weak maps in JavaScript for efficient data management. Explore real-world examples and best practices for developers.",
  },
];
export default function GetIntoTechCard({ countDisplay }) {
  return (
    <>
      {cardData?.slice(0, countDisplay)?.map((el, i) => {
        return (
          <div className="get_into_tech_card_item" title={el?.heading} key={i}>
            <h2 className="heading">{el?.heading}</h2>
            <p className="desc" title={el?.desc}>
              {el?.desc}
            </p>
          </div>
        );
      })}
    </>
  );
}

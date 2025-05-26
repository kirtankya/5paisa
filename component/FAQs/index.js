import React, { useState, useRef, useEffect } from "react";

export default function FAQs() {
    const [open, setOpen] = useState(null);
    const answerRefs = useRef([]);

    const FAQs = [
        {
            Question: "What is 5paisa AI?",
            Answer:
                "5paisa AI is a technology-driven platform designed to provide users with personalized financial advice, stock recommendations, and portfolio management services using advanced AI and machine learning algorithms.",
        },
        {
            Question: "How does 5paisa AI work?",
            Answer:
                "5paisa AI analyzes vast amounts of financial data, market trends, and user profiles to offer tailored investment strategies and stock recommendations. It continuously learns and adapts to changing market conditions to improve its predictions and advice.",
        },
        {
            Question: "Is 5paisa AI suitable for beginners?",
            Answer:
                "Yes, 5paisa AI is designed to be user-friendly and accessible to both beginners and experienced investors. It provides clear guidance and educational resources to help users make informed decisions.",
        },
        {
            Question: "What types of investment strategies does 5paisa AI support?",
            Answer:
                "5paisa AI supports various investment strategies, including long-term investing, short-term trading, value investing, growth investing, and more. The platform can tailor recommendations based on your preferred strategy.",
        },
        {
            Question: "Does 5paisa AI offer educational tools for investors?",
            Answer:
                "Yes, 5paisa AI provides a range of educational tools, including articles, videos, webinars, and tutorials to help investors enhance their knowledge and make informed decisions.",
        },
    ];

    const handleOnClick = (index) => {
        setOpen(open === index ? null : index);
    };

    useEffect(() => {
        if (open !== null) {
            answerRefs.current[open].style.height = `${answerRefs.current[open].scrollHeight}px`;
        }
    }, [open]);

    return (
        <div className="faq-section-all-content-alignment">
            <div className="container">
                <div className="FAQs_Title">
                    <h2 title="Frequently Asked Questions">Frequently Asked Questions</h2>
                </div>
                <div className="FAQs_Main">
                    {FAQs.map((el, index) => {
                        return (
                            <div
                                key={index}
                                onClick={() => handleOnClick(index)}
                                className={`FAQs_sec ${open === index ? "open" : ""}`}
                            >
                                <div className="FAQs_Question">
                                    <h3 title={el.Question}>{el.Question}</h3>
                                    <div className="icon">
                                        {open === index ? (
                                            <svg
                                                stroke="currentColor"
                                                fill="none"
                                                strokeWidth="2"
                                                viewBox="0 0 24 24"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M5 12h14"></path>
                                            </svg>
                                        ) : (
                                            <svg
                                                stroke="currentColor"
                                                fill="none"
                                                strokeWidth="2"
                                                viewBox="0 0 24 24"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <line x1="12" y1="5" x2="12" y2="19"></line>
                                                <line x1="5" y1="12" x2="19" y2="12"></line>
                                            </svg>
                                        )}
                                    </div>
                                </div>
                                <div
                                    className="FAQs_Answer"
                                    ref={(el) => (answerRefs.current[index] = el)}
                                    style={{
                                        height: open === index ? `${answerRefs.current[index]?.scrollHeight}px` : "0"
                                    }}
                                >
                                    <span title={el.Answer}>{el.Answer}</span>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

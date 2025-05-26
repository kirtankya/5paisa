import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function Subscription() {
    const [data, setData] = useState({
        name: "",
        email: "",
        subscribe: false,
    });
    const handleOnchange = (ev) => {
        const { name, value, type, checked } = ev.target;
        setData((prevData) => ({
            ...prevData,
            [name]: type === "checkbox" ? checked : value,
        }));
    };
    const handleOnsubmit = (ev) => {
        ev.preventDefault();
        localStorage.setItem("formData", JSON.stringify(data));
        if (data.name && data.email && data.subscribe) {
            toast.success("Sucessfully subscribed to our newsletter!");
            setData({
                name: "",
                email: "",
                subscribe: false,
            });
        } else {
            toast.error("Please fill in all the required fields!");
        }
    };
    return (
        <div className="subscribe_newsletter_main">
            <div className="subscribe_newsletter_title">
                <h2 title="Are you a pro? Subscribe to our newsletter">
                    Are you a pro? Subscribe to our newsletter
                </h2>
            </div>
            <div className="subscribe_newsletter_subtitle">
                <p title="If you want to receive our latest news send directly to your email, please leave your email address bellow. Subscription is free and you can cancel anytime.">
                    If you want to receive our latest news send directly to your email,
                    please leave your email address bellow. Subscription is free and you
                    can cancel anytime.
                </p>
            </div>
            <form onSubmit={handleOnsubmit} className="subscribe_newsletter_form">
                <div className="subscribe_newsletter_name">
                    <input
                        required
                        type="text"
                        onChange={handleOnchange}
                        value={data?.name}
                        placeholder="Enter Your Name"
                        name="name"
                        id=""
                    />
                </div>
                <div className="subscribe_newsletter_email">
                    <input
                        required
                        type="email"
                        onChange={handleOnchange}
                        value={data?.email}
                        placeholder="Enter Your Email"
                        name="email"
                        id=""
                    />
                </div>
                <div className="subscribe_agree">
                    <input
                        required
                        type="checkbox"
                        onChange={handleOnchange}
                        checked={data?.subscribe}
                        name="subscribe"
                        id=""
                    />
                    <div className="subscribe_agree_containe">
                        <p title="I agree to subscribe to receive updates.">
                            I agree to subscribe to receive updates.
                        </p>
                    </div>
                </div>
                <div className="button">
                    <button type="submit" title="Subscribe Now">
                        <span>Subscribe Now</span>
                        <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth="0"
                            viewBox="0 0 448 512"
                            height="20px"
                            width="20px"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M446.7 98.6l-67.6 318.8c-5.1 22.5-18.4 28.1-37.3 17.5l-103-75.9-49.7 47.8c-5.5 5.5-10.1 10.1-20.7 10.1l7.4-104.9 190.9-172.5c8.3-7.4-1.8-11.5-12.9-4.1L117.8 284 16.2 252.2c-22.1-6.9-22.5-22.1 4.6-32.7L418.2 66.4c18.4-6.9 34.5 4.1 28.5 32.2z"></path>
                        </svg>
                    </button>
                </div>
                <Toaster />
            </form>
            <span title="By submitting your information you agree to the Terms & Conditionsand Privacy Policy and are aged 16 or over.">
                By submitting your information you agree to the{" "}
                <a href="#">
                    Terms & Conditions
                </a>
                and{" "}
                <a href="#">
                    Privacy Policy
                </a>{" "}
                and are aged 16 or over.
            </span>
        </div>
    );
}

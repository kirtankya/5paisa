import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function Subscription_Model() {
    const [modelOpen, setModelOpen] = useState(false);
    const [data, setData] = useState("");
    const [dontShowAgain, setDontShowAgain] = useState(false);

    useEffect(() => {
        const isSubscribed = localStorage.getItem("isSubscribed");
        if (!isSubscribed) {
            setTimeout(() => {
                document.body.classList.add("cm-overflow");
                setModelOpen(true);
            }, 2000)
        }
    }, []);

    const handleOnclose = () => {
        document.body.classList.remove("cm-overflow");
        setModelOpen(false);
    };

    const handleOnSubmit = (event) => {
        event.preventDefault();
        if (data) {
            localStorage.setItem("email:", data);
            localStorage.setItem('isSubscribed', 'true');
            toast.success("Sucessfully Subscribed to our newsletter!");
        } else {
            toast.error("Something went wrong!");
        }
        handleOnclose();
    };

    const handleOnchange = (ev) => {
        setDontShowAgain(ev.target.value);
        if (ev.target.checked) {
            handleOnclose();
        }
    }

    return (
        <>
            {modelOpen && !dontShowAgain && (
                <div className="Subscription_Model">
                    <div className="Model">
                        <div className="aligments">
                            <p className="title" title="Subscribe">
                                Subscribe
                            </p>
                            <div onClick={handleOnclose} className="close_Btn">
                                <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    strokeWidth="0"
                                    viewBox="0 0 512 512"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49z"></path>
                                </svg>
                            </div>
                        </div>
                        <p
                            className="description"
                            title=" Sign up to get update about us. Don't be hasitate your email is
                            safe."
                        >
                            Sign up to get update about us. Don't be hasitate your email is
                            safe.
                        </p>
                        <form onSubmit={handleOnSubmit} action="">
                            <input
                                required
                                placeholder="Enter Your Email ......"
                                type="email"
                                onChange={(e) => setData(e.target.value)}
                                value={data}
                                name="email"
                                id=""
                            />
                            <button type="submit">
                                <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    strokeWidth="0"
                                    viewBox="0 0 512 512"
                                    height="20px"
                                    width="20px"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M476 3.2L12.5 270.6c-18.1 10.4-15.8 35.6 2.2 43.2L121 358.4l287.3-253.2c5.5-4.9 13.3 2.6 8.6 8.3L176 407v80.5c0 23.6 28.5 32.9 42.5 15.8L282 426l124.6 52.2c14.2 6 30.4-2.9 33-18.2l72-432C515 7.8 493.3-6.8 476 3.2z"></path>
                                </svg>
                            </button>
                            <Toaster />
                        </form>
                        <div className="model_aligment">
                            <input type="checkbox" onChange={handleOnchange} name="checkbox" id="" />
                            <span title="I don't want to see this popup again.">
                                I don't want to see this popup again.
                            </span>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";

export default function Cookies_Sec() {
    const [accpectCookies, setAccepectCookies] = useState(false);
    const expirationDate = new Date(Date.now() + 365 * 24 * 60 * 60 * 1000);
    useEffect(() => {
        const cookiesAccepted = Cookies.get('acceptedCookies');
        if (cookiesAccepted === 'true' || cookiesAccepted === 'false') {
            setAccepectCookies(true);
        }
    }, []);

    const acceptCookies = () => {
        Cookies.set('acceptedCookies', 'true', { expires: expirationDate });
        setAccepectCookies('true');
    };

    const rejectCookies = () => {
        Cookies.set('acceptedCookies', 'false', { expires: expirationDate });
        setAccepectCookies('false');
    };
    if (accpectCookies) {
        return null;
    }
    const closeBtn = () => {
        setAccepectCookies('false');
    }
    return (
        <div className="cookies_Bar">
            <div className="cookies_Notice">
                <p title="Cookies help us enhance your visit. Click 'Accept' to consent. Learn more in our Privacy Policy.">
                    Cookies help us enhance your visit. Click 'Accept' to consent. Learn
                    more in our <a href="#">Privacy Policy</a>
                </p>
            </div>
            <div className="cookies_Button">
                <div onClick={rejectCookies} className="cookies_Btn Rejected">
                    <button title="Reject">Reject</button>
                </div>
                <div onClick={acceptCookies} className="cookies_Btn Accpect">
                    <button title="Accept">Accept</button>
                </div>
                <div onClick={closeBtn} className="close_Btn">
                    <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 512 512"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M405 136.798L375.202 107 256 226.202 136.798 107 107 136.798 226.202 256 107 375.202 136.798 405 256 285.798 375.202 405 405 375.202 285.798 256z"></path>
                    </svg>
                </div>
            </div>
        </div>
    );
}

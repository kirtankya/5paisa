import { DefaultSeo } from "next-seo";
import { ParallaxProvider } from "react-scroll-parallax";
import { useState, useEffect } from "react";
import { SEO } from "@/next-seo.config";
import { Context } from "@/Hooks/UseContext";
import Head from "next/head";
import Script from "next/script";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-tooltip/dist/react-tooltip.css";
import "@/styles/global.scss";
import { useRouter } from "next/router";
import NextNProgress from "nextjs-progressbar";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Subscription_Model from "@/common/subscription_model";
import Cookies_Sec from "@/component/cookies";
export default function App({ Component, pageProps }) {
  const router = useRouter();
  const [isLoader, LoaderState] = useState(false);
  const [isShareModal, ShareModalState] = useState({
    status: false,
    title: ``,
    content: ``,
  });
  const [isProgressBar, SetProgressBar] = useState(false);
  useEffect(() => {
    const handleStart = (url, { shallow }) => {
      if (!shallow) {
        SetProgressBar(true);
      }
    };
    const handleComplete = () => {
      SetProgressBar(false);
    };
    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);
    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  }, [router.events]);
  //---Main-Blog-Page-useState--------------------
  const [currentPage, setCurrentPage] = useState(1);
  const [Category, SetCategory] = useState();
  const [Serach, SetSerach] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const handleOnclick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);
  return (
    <>
      <NextNProgress
        color="#efe6e6"
        startPosition={0}
        stopDelayMs={200}
        height={2}
        showOnShallow={isProgressBar}
      />
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#c36bd6" />
        <meta name="author" content="AssignmentGPT AI" />
        <meta name="publisher" content="Assignmentgpt Team" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <link rel="apple-touch-startup-image" href="/favicon.png" />
        <link rel="manifest" href="/manifest.json" />
        <link
          rel="apple-touch-icon"
          type="image/png"
          href="/apple-touch-icon.png"
        />
        <link rel="shortcut icon" type="image/png" href="/favicon.png" />
        <link rel="icon" type="image/png" href="/android-chrome-192x192.png" />
        <link rel="icon" type="image/png" href="/android-chrome-512x512.png" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cabin:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Oxanium:wght@200;300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"
          integrity="sha512-5A8nwdMOWrSz20fDsjczgUidUBR8liPYU+WymTZP1lmY9G6Oc7HlZv156XqnsgNUzTyMefFTcsFH/tnJE/+xBg=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </Head>
      <DefaultSeo {...SEO} />
      <ParallaxProvider>
        <>
          <Context.Provider
            value={{
              isLoader,
              LoaderState,
              isShareModal,
              ShareModalState,
              currentPage,
              setCurrentPage,
              Category,
              SetCategory,
              Serach,
              SetSerach,
              isProgressBar,
            }}
          >
            <Component {...pageProps} />
          </Context.Provider>
        </>
      </ParallaxProvider>
      <div className="whatshapp_message_icon">
        <div className="whatshapp_Icon">
          <a target="_blank" href="https://web.whatsapp.com/">
            <LazyLoadImage
              loading="lazy"
              src="https://i.postimg.cc/h4r6bdfK/42-421694-whatsapp-icon-vector-png-transparent-png-removebg-preview.png"
              alt="whatshapp-icon"
            />
          </a>
        </div>
      </div>
      <div className="tap_to_topButton">
        {isVisible && (
          <button onClick={handleOnclick} className="scroll-Button">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 25 25"
              height="25px"
              width="25px"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path fill="none" d="M0 0h24v24H0V0z"></path>
              <path d="M7.41 15.41 12 10.83l4.59 4.58L18 14l-6-6-6 6 1.41 1.41z"></path>
            </svg>
          </button>
        )}
      </div>
      <div className="subscription_model">
        <Subscription_Model />
      </div>
      <>
        <Cookies_Sec />
      </>
    </>
  );
}

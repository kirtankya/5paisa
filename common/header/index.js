import { useRouter } from "next/router";
import { useEffect, useState } from "react";
// const Header_Logo = "assets/logo/5Paisa_Logo_1.png";

export default function Header() {
  const router = useRouter();
  const [scrollProgress, setScrollProgress] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("cm-overflow");
    } else {
      document.body.classList.remove("cm-overflow");
    }
  }, [menuOpen]);
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;
      const scrollPercentage =
        (scrollTop / (scrollHeight - clientHeight)) * 100;
      setScrollProgress(scrollPercentage);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const isActive = (el) => (router.pathname === el ? "active" : "");
  return (
    <header>
      <div className="container">
        <div id="progressBarContainer">
          <div
            id="progressBar"
            style={{
              transform: `scale(${scrollProgress / 100}, 1)`,
            }}
          ></div>
        </div>
        <div className="header_alignment">
          <div className="header_logo" onClick={() => router.push("/")}>
            {/* <img src={Header_Logo} alt="Header Logo" /> */}
            <img src="/assets/logo/5PaisaLogoGray.png" alt="Header Logo" />
          </div>
          <div className="header_btn">
            <button>
              <a
                href="https://chromewebstore.google.com/detail/dailydev-the-homepage-dev/jlmpjdjjbgclbocgajdjefcidcncaied"
                target="_blank"
              >
                Start reading <span> - Free Forever</span>
              </a>
            </button>
            <div onClick={toggleMenu} className="humburger">
              <svg
                stroke="#fff"
                fill="#fff"
                strokeWidth="2"
                viewBox="0 0 24 24"
                aria-hidden="true"
                height="30px"
                width="30px"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
      {menuOpen && (
        <div className="menu_Items">
          <div onClick={toggleMenu} className="close_Btn">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 512 512"
              height="30px"
              width="30px"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49z"></path>
            </svg>
          </div>
          <nav>
            <ul>
              <li className={isActive("/")}>
                <a href="/">Home</a>
              </li>
              <li className={isActive("/about-us")}>
                <a href="/about-us">About</a>
              </li>
              <li className={isActive("/news-blog")}>
                <a href="/news-blog">Blog</a>
              </li>
              <li className={isActive("/contact-us")}>
                <a href="/contact-us">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      )}
      <div className="bg-behind-header"></div>
    </header>
  );
}

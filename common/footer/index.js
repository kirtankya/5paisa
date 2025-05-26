import { useRouter } from "next/router";
// const Footer_Logo = "assets/logo/5paisa_Logo_1.png";
export default function Footer() {
  const router = useRouter();
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer_info_flex_main">
          <div className="footer_info">
            {/* <img src={Footer_Logo} alt="Footer Logo" /> */}
            <img
              src="/assets/logo/5PaisaLogoGray.png"
              alt="Footer Logo"
              onClick={() => router.push("/")}
            />
            <p>
              daily.dev is a professional network for developers to learn,
              collaborate, and grow together.
            </p>
            <button onClick={() => router.push("/news-blog")}>
              start Reading
            </button>
            <div className="social_icons">
              <a href="https://x.com/" target="_main">
                <svg
                  stroke="#a9abb3"
                  fill="#a9abb3"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  height="24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M8 2H1L9.26086 13.0145L1.44995 21.9999H4.09998L10.4883 14.651L16 22H23L14.3917 10.5223L21.8001 2H19.1501L13.1643 8.88578L8 2ZM17 20L5 4H7L19 20H17Z"></path>
                </svg>
              </a>
              <a href="https://github.com/" target="_main">
                <svg
                  stroke="#a9abb3"
                  fill="#a9abb3"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  height="24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path
                    d="M5.315 2.1c.791 -.113 1.9 .145 3.333 .966l.272 .161l.16 .1l.397 -.083a13.3 13.3 0 0 1 4.59 -.08l.456 .08l.396 .083l.161 -.1c1.385 -.84 2.487 -1.17 3.322 -1.148l.164 .008l.147 .017l.076 .014l.05 .011l.144 .047a1 1 0 0 1 .53 .514a5.2 5.2 0 0 1 .397 2.91l-.047 .267l-.046 .196l.123 .163c.574 .795 .93 1.728 1.03 2.707l.023 .295l.007 .272c0 3.855 -1.659 5.883 -4.644 6.68l-.245 .061l-.132 .029l.014 .161l.008 .157l.004 .365l-.002 .213l-.003 3.834a1 1 0 0 1 -.883 .993l-.117 .007h-6a1 1 0 0 1 -.993 -.883l-.007 -.117v-.734c-1.818 .26 -3.03 -.424 -4.11 -1.878l-.535 -.766c-.28 -.396 -.455 -.579 -.589 -.644l-.048 -.019a1 1 0 0 1 .564 -1.918c.642 .188 1.074 .568 1.57 1.239l.538 .769c.76 1.079 1.36 1.459 2.609 1.191l.001 -.678l-.018 -.168a5.03 5.03 0 0 1 -.021 -.824l.017 -.185l.019 -.12l-.108 -.024c-2.976 -.71 -4.703 -2.573 -4.875 -6.139l-.01 -.31l-.004 -.292a5.6 5.6 0 0 1 .908 -3.051l.152 -.222l.122 -.163l-.045 -.196a5.2 5.2 0 0 1 .145 -2.642l.1 -.282l.106 -.253a1 1 0 0 1 .529 -.514l.144 -.047l.154 -.03z"
                    strokeWidth="0"
                    fill="#a9abb3"
                  ></path>
                </svg>
              </a>
              <a href="https://www.instagram.com/" target="_main">
                <svg
                  stroke="#a9abb3"
                  fill="#a9abb3"
                  strokeWidth="0"
                  viewBox="0 0 16 16"
                  height="24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"></path>
                </svg>
              </a>
              <a href="https://tiktok.com/" target="_main">
                <svg
                  stroke="#a9abb3"
                  fill="#a9abb3"
                  strokeWidth="0"
                  viewBox="0 0 448 512"
                  height="24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"></path>
                </svg>
              </a>
            </div>
          </div>
          <div className="sitemap">
            <div className="sitemap_col">
              <h3>Product</h3>
              <p>Chrome extension</p>
              <p>Firefox add-on</p>
              <p>Edge add-on</p>
              <p>Web version</p>
              <p>Squads (Beta)</p>
              <p>Changelog</p>
            </div>
            <div className="sitemap_col">
              <h3>Community</h3>
              <p>Docs</p>
              <p>Open source</p>
              <p>Feature requests</p>
              <p>Online events</p>
              <p>Swag store</p>
            </div>
            <div className="sitemap_col">
              <h3>Company</h3>
              <p>Careers</p>
              <p onClick={() => router.push("/news-blog")}>Blog</p>
              <p>Advertise</p>
              <p>Brand book</p>
              <p onClick={() => router.push("/about-us")}>About us</p>
              <p onClick={() => router.push("/contact-us")}>Contact</p>
            </div>
          </div>
        </div>
        <div className="terms">
          <span>© 2023 Daily Dev Ltd.</span>
          <span>|</span>
          <span>Terms</span>
          <span>|</span>
          <span>Privacy</span>
          <span>|</span>
          <span>Guidelines</span>
        </div>
      </div>
    </footer>
  );
}

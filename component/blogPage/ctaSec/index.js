// const Browser = "assets/images/cta_browser.svg";
export default function Cta() {
  return (
    <section className="cta_sec">
      <div className="container">
        <div className="add_pink_line"></div>
        <div className="cta_flex_main">
          <div className="cta_heading">
            <h2 className="cta_head">
              Why not level up your reading with <span>daily.dev?</span>
            </h2>
            <p className="cta_desc">
              Stay up-to-date with the latest developer news every time you open
              a new tab.
            </p>
          </div>
          <div className="cta_btn">
            {/* <img src={Browser} alt="Browser" /> */}
            <img src="/assets/images/cta_browser.svg" alt="Browser" />
            <button>
              <a href="https://chromewebstore.google.com/detail/dailydev-the-homepage-dev/jlmpjdjjbgclbocgajdjefcidcncaied" target="_blank">
                Start reading - free forever
              </a>
            </button>
          </div>
        </div>
        <div className="add_pink_line"></div>
      </div>
    </section>
  );
}

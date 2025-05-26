import React, { useState } from "react";

export default function ContactUs() {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const handleOnChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    setError({ ...error, [e.target.name]: "" });
  };
  const handleOnClick = (e) => {
    e?.preventDefault();
    const requiredFields = ["Name", "Email", "Mobile_Number", "Message"];
    const newErrors = {};
    let hasError = false;
    requiredFields.forEach((el) => {
      if (!data[el]) {
        newErrors[el] = `${el} is required`;
        hasError = true;
      }
    });

    if (hasError) {
      setError(newErrors);
      return;
    }
    const existingData = JSON.parse(localStorage.getItem("Data")) || [];
    const newData = [...existingData, data];
    localStorage.setItem("Data", JSON.stringify(newData));
    setData({
      Name: "",
      Email: "",
      Mobile_Number: "",
      Message: "",
    });
  };
  return (
    <section className="contact_us">
      <div className="contact_hero_section">
        <h1 className="contact_us_heading">Contact Us</h1>
      </div>
      <div className="container">
        <form>
          <div className="contact_form">
            <div className="contact_row">
              <div>
                <input
                  type="text"
                  placeholder="Enter Your Name"
                  title="Enter Your Name"
                  className="input"
                  name="Name"
                  value={data?.Name}
                  required
                  onChange={(e) => handleOnChange(e)}
                />
                {error.Name && <p>{error.Name}</p>}
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  title="Enter Your Email"
                  className="input"
                  name="Email"
                  value={data?.Email}
                  required
                  onChange={(e) => handleOnChange(e)}
                />
                {error.Email && <p>{error.Email}</p>}
              </div>
              <div>
                <input
                  type="number"
                  placeholder="Enter Your Mobile Number"
                  title="Enter Your Mobile Number"
                  className="input"
                  name="Mobile_Number"
                  value={data?.Mobile_Number}
                  required
                  onChange={(e) => handleOnChange(e)}
                />
                {error.Mobile_Number && <p>{error.Mobile_Number}</p>}
              </div>
            </div>
            <div className="contact_row_full">
              <textarea
                name="Message"
                className="text_area"
                placeholder="Enter Your Message"
                title="Enter Your Message"
                value={data?.Message}
                onChange={(e) => handleOnChange(e)}
                required
              />
              {error.Message && <p>{error.Message}</p>}
            </div>
            <div className="contact_btn" onClick={(e) => handleOnClick(e)}>
              <button>
                Send now
                {/* ➤ */}
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                  height="20"
                  width="20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

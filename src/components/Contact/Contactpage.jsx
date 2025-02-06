import React, { useEffect, useState } from "react";
import "./Contactpage.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressCard } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faInbox } from "@fortawesome/free-solid-svg-icons";
import { faPaperclip } from "@fortawesome/free-solid-svg-icons";
import contactimg from "../../Assets/img/img3.jpg";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to the server
    console.log("Form submitted:", formData);
  };

  useEffect(() => {
    const inputs = document.querySelectorAll(".contact-input");
    inputs.forEach((ipt) => {
      ipt.addEventListener("focus", () => {
        ipt.parentNode.classList.add("focus");
        ipt.parentNode.classList.add("not-empty");
      });
      ipt.addEventListener("blur", () => {
        if (ipt.value == "") {
          ipt.parentNode.classList.remove("not-empty");
        }
        ipt.parentNode.classList.remove("focus");
      });
    });
  }, []);

  return (
    <div className="contact">
      <div className="container">
        <div className="left">
          <div className="form-wrapper">
            <div className="contact-heading">
              <h1>
                Reach out to us<span>.</span>
              </h1>
              {/* <p className="text">
                Or contact us via:
                <a href="mailto:thapaabhishek2057@gmail.com">
                  thapaabhishek2057@gmail.com
                </a>
              </p> */}
              <p className="text">
                Or visit us at :{" "}
                <a
                  style={{ textDecoration: "none" }}
                  href="https://maps.app.goo.gl/HRDeoVsb1StDAn1K6"
                  target="_blank"
                >
                  MOKSHA LEGAL GROUP
                </a>
              </p>
            </div>

            <form action="" method="post" className="contact-form">
              <div className="input-wrap">
                <input
                  className="contact-input"
                  autoComplete="off"
                  name="Name"
                  type="text"
                  required
                />
                <label>Enter your Name</label>
                <FontAwesomeIcon className="icons" icon={faAddressCard} />
              </div>

              <div className="input-wrap w-100">
                <input
                  className="contact-input"
                  autoComplete="off"
                  name="Email"
                  type="email"
                  required
                />
                <label>Email</label>
                <FontAwesomeIcon className="icons" icon={faEnvelope} />
              </div>

              <div className="input-wrap w-100">
                <textarea
                  name="Messagae"
                  autoComplete="off"
                  className="contact-input"
                  required
                ></textarea>
                <label>Message</label>
                <FontAwesomeIcon className="icons" icon={faInbox} />
              </div>
              <div className="contact-buttons">
                <button className="btn upload">
                  <span>
                    <FontAwesomeIcon icon={faPaperclip} />
                    Add Attachment
                  </span>
                  <input type="file" name="attachment" />
                </button>
                <input type="submit" value="Send Message" className="btn" />
              </div>
            </form>
          </div>
        </div>
        <div className="right">
          <div className="image-wrapper">
            <img src={contactimg} className="img" />

            <div className="wave-wrap">
              <svg
                viewBox="0 0 783 1536"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="wave"
              >
                <path
                  id="wave"
                  d="M236.705 1356.18C200.542 1483.72 64.5004 1528.54 1 1535V1H770.538C793.858 63.1213
                 797.23 196.197 624.165 231.531C407.833 275.698 274.374 331.715 450.884 568.709C627.393
                  805.704 510.079 815.339 347.561 939.282C185.043 1063.17 281.908 1196.74 236.705 1356.18Z"
                />
              </svg>
            </div>
            <svg
              className="dashed-wave"
              viewBox="0 0 345 877"
              fill="none "
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                id="dashed-wave"
                d="M0.5 876C25.6667 836.167 73.2 739.8 62 673C48 589.5 35.5 499.5 125.5 462C215.5 424.5 150 
                365 87 333.5C24 302 44 237.5 125.5 213.5C207 189.5 307 138.5 246 87C185 35.5 297 1 344.5 1 "
                stroke="white"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

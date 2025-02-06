import React from "react";
import { motion } from "framer-motion";
import "./Cta.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentDots } from "@fortawesome/free-solid-svg-icons";
import whatsapp from "../../../Assets/img/whatsapp.png";
import viber from "../../../Assets/img/viber.png";
import mail from "../../../Assets/img/mail.png";

const Cta = () => {
  return (
    <div className="cta-section">
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-lg-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
                delay: 0.4,
              }}
              viewport={{ once: false }}
            >
              <div className="cta-content">
                <h2 className="cta-title">
                  Let's get started. Call us now for a <br />
                  Free Consultation
                </h2>
                <div className="cta-wrapper">
                  <input type="checkbox" />
                  <div className="cta-btn">
                    <FontAwesomeIcon
                      icon={faCommentDots}
                      style={{
                        color: "#b49c73",
                        width: "45px",
                        height: "30px",
                      }}
                    />
                  </div>
                  <div className="tooltip">
                    <button className="whatsapp-Btn">
                      <span className="svgContainer">
                        <img
                          className="whatsapp-logo"
                          src={whatsapp}
                          alt="whatsapp"
                        />
                      </span>
                      <span className="BG"></span>
                    </button>
                    <button className="viber-Btn">
                      <span className="svgContainer">
                        <img className="viber-logo" src={viber} alt="viber" />
                      </span>
                      <span className="BG"></span>
                    </button>
                    <button className="mail-Btn">
                      <span className="svgContainer">
                        <img className="mail-logo" src={mail} alt="" />
                      </span>
                      <span className="BG"></span>
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cta;

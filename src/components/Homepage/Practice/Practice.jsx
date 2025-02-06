import React from "react";
import { motion } from "framer-motion";
import "./Practice.scss";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsers,
  faHandHoldingUsd,
  faLandmark,
  faGavel,
} from "@fortawesome/free-solid-svg-icons";
import scales from "../../../Assets/img/bg.png";

const Practice = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3, // Display one card at a time
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <>
      <div className="practise-bg-img">
        <img src={scales} alt="scales" />
      </div>
      <div className="practice-section">
        <div className="container">
          <div className="row align-items-center">
            {/* Left Side Content */}
            <div className="col-lg-4 col-md-12 mb-4">
              <div className="practice-content">
                <motion.div
                  initial={{ opacity: 0, x: -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.12 }}
                  viewport={{ once: false }}
                >
                  <h6 className="practice-subtitle">Our Practices</h6>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
                  viewport={{ once: false }}
                >
                  <h2 className="practice-title">Our Practice Areas</h2>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.9 }}
                  viewport={{ once: false }}
                >
                  <p className="practice-text">
                    Our Practice Areas include Civil Law for disputes, Family
                    Law for domestic matters, Business Law for corporate needs,
                    and Criminal Law for strong defense. We offer professional,
                    reliable legal solutions tailored to your needs with care
                    and expertise.
                  </p>
                </motion.div>

                <motion.div
                  className="col-lg-6"
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.8,
                    ease: "easeOut",
                    delay: 0.14,
                  }}
                  viewport={{ once: false }}
                >
                  <button className="button-service">More Services</button>
                </motion.div>
              </div>
            </div>

            {/* Right Side Carousel */}
            <div className="col-lg-8 col-md-12 position-relative">
              <div className="practise-bg"></div>
              <Carousel
                responsive={responsive}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={2000}
                arrows={false}
                showDots={true}
              >
                <div className="practise-card">
                  <div className="practise-card-body text-center">
                    <div className="icon-box">
                      <FontAwesomeIcon
                        className="icons"
                        icon={faUsers}
                        style={{
                          color: "#b49c73",
                          width: "45px",
                          height: "30px",
                        }}
                      />
                    </div>
                    <h5>Family Law</h5>
                    <p>Legal solutions for domestic and family matters.</p>
                  </div>
                </div>
                <div className="practise-card">
                  <div className="practise-card-body text-center">
                    <div className="icon-box">
                      <FontAwesomeIcon
                        className="icons"
                        icon={faHandHoldingUsd}
                        style={{
                          color: "#b49c73",
                          width: "45px",
                          height: "30px",
                        }}
                      />
                    </div>
                    <h5>Business Law</h5>
                    <p>Corporate legal advice and solutions.</p>
                  </div>
                </div>
                <div className="practise-card">
                  <div className="practise-card-body text-center">
                    <div className="icon-box">
                      <FontAwesomeIcon
                        className="icons"
                        icon={faGavel}
                        style={{
                          color: "#b49c73",
                          width: "45px",
                          height: "30px",
                        }}
                      />
                    </div>
                    <h5>Criminal Law</h5>
                    <p>Strong legal defense for criminal cases.</p>
                  </div>
                </div>
                <div className="practise-card">
                  <div className="practise-card-body text-center">
                    <div className="icon-box">
                      <FontAwesomeIcon
                        className="icons"
                        icon={faLandmark}
                        style={{
                          color: "#b49c73",
                          width: "45px",
                          height: "30px",
                        }}
                      />
                    </div>
                    <h5>Civil Law</h5>
                    <p>Legal expertise for civil disputes.</p>
                  </div>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Practice;

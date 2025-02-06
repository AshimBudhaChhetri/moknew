import React from "react";
import { motion } from "framer-motion";
import "./Hero.scss";

const Hero = () => {
  return (
    <div className="hero-section">
      <div className="container-fluid p-0">
        <div className="row g-0">
          <div className="col-12">
            <div className="hero-image"></div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="hero-text">
                <motion.div
                  initial={{ opacity: 0, x: -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.99, ease: "easeOut", delay: 0.2 }}
                  viewport={{ once: false }}
                >
                  <h5>WELCOME TO</h5>
                  <div className="horizontal-line"></div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: -100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.8,
                    ease: "easeOut",
                    delay: 0.4,
                  }}
                  viewport={{ once: false }}
                >
                  <h2>MOKSHA</h2>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: -100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.8,
                    ease: "easeOut",
                    delay: 0.6,
                  }}
                  viewport={{ once: false }}
                >
                  <h3>LEGAL GROUP</h3>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: -61 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.8,
                    ease: "easeOut",
                    delay: 0.99,
                  }}
                  viewport={{ once: false }}
                >
                  <h4>“Your Legal Counsel”</h4>
                </motion.div>

                {/* <div className="hero-btn">
                  <button className="hero-appointment">Get Appointment</button>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

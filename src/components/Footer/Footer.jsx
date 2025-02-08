import React from "react";
import { Link } from "react-router-dom";
import "./Footer.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faEnvelopeOpenText,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import logo from "../../Assets/img/Moksha logo.png";

const Footer = () => {
  return (
    <footer className="footer-section py-5">
      <div className="container">
        {/* Top Row */}
        <div className="row text-center text-lg-start mb-5">
          {/* Office */}
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="footer-card">
              <FontAwesomeIcon
                className="icons"
                icon={faLocationDot}
                style={{ color: "#b49c73", width: "45px", height: "30px" }}
              />
              <div className="footer-card1">
                <h5 className="mt-3">Our Office</h5>
                <p>Anamnagar-29, Kathmandu, Nepal</p>
              </div>
            </div>
          </div>

          {/* Email */}
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="footer-card">
              <FontAwesomeIcon
                className="icons"
                icon={faEnvelopeOpenText}
                style={{ color: "#b49c73", width: "45px", height: "30px" }}
              />
              <div className="footer-card1">
                <h5 className="mt-3">Email Us</h5>
                <a
                  style={{ textDecoration: "none", color: "#b49c73" }}
                  href="mailto:office@mokshalegalgroup.com"
                >
                  office@mokshalegalgroup.com
                </a>
              </div>
            </div>
          </div>

          {/* Call */}
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="footer-card">
              <FontAwesomeIcon
                className="icons"
                icon={faPhone}
                style={{ color: "#b49c73", width: "45px", height: "30px" }}
              />
              <div className="footer-card1 callus">
                <h5 className="mt-3">Call Us</h5>
                <p>+977 9843467402</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="row text-center text-lg-start">
          {/* Logo and Socials */}
          <div className="col-lg-4 col-md-12 mb-4 footer-logo">
            <Link to="/" className="navbar-left ">
              <img src={logo} alt="Logo" />
            </Link>

            <div className="social-card">
              <a className="socialContainer containerOne instagram" href="#">
                <FontAwesomeIcon
                  className="fosocial-icons"
                  icon={faInstagram}
                  style={{ color: "#b49c73", width: "45px", height: "25px" }}
                />
              </a>

              <a className="socialContainer containerTwo twitter" href="#">
                <FontAwesomeIcon
                  className="fosocial-icons"
                  icon={faFacebook}
                  style={{ color: "#b49c73", width: "45px", height: "25px" }}
                />
              </a>

              <a className="socialContainer containerThree linkedin" href="#">
                <FontAwesomeIcon
                  className="fosocial-icons"
                  icon={faLinkedin}
                  style={{ color: "#b49c73", width: "45px", height: "25px" }}
                />
              </a>

              <a className="socialContainer containerFour mail" href="#">
                <FontAwesomeIcon
                  className="fosocial-icons"
                  icon={faEnvelopeOpenText}
                  style={{ color: "#b49c73", width: "45px", height: "25px" }}
                />
              </a>
            </div>
          </div>

          {/* Popular Links */}
          <div className="col-lg-4 col-md-6 mb-4  ">
            <h5 style={{ marginBottom: "30px" }}>Popular Links</h5>
            <div className="popular-link">
              <p className="footer-link">
                <div className="vertical-line"></div>
                <a href="#faqs">Home</a>
              </p>
              <p className="footer-link">
                <div className="vertical-line"></div>
                <a href="#faqs">About</a>
              </p>
              <p className="footer-link">
                <div className="vertical-line"></div>
                <a href="#faqs">Attorney</a>
              </p>
              <p className="footer-link">
                <div className="vertical-line"></div>
                <a href="#faqs">Contact</a>
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-lg-4 col-md-6 mb-4 ">
            <h5 style={{ marginBottom: "30px" }}>Quick Links</h5>

            <div className="quick-link">
              <p className="footer-link">
                <div className="vertical-line"></div>
                <a href="#faqs">FAQs</a>
              </p>
              <p className="footer-link">
                <div className="vertical-line"></div>
                <a href="#help">Help</a>
              </p>
              <p className="footer-link">
                <div className="vertical-line"></div>
                <a href="#terms">Terms</a>
              </p>
              <p className="footer-link">
                <div className="vertical-line"></div>
                <a href="#sitemap">Site Map</a>
              </p>
            </div>
          </div>
          {/* <div className="col-lg-4 col-md-6 mb-4">
            <h5>Popular Links</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/aboutpage">About</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link to="/attorney">Attorney</Link>
              </li>
              <li>
                <Link to="/contactpage">Contact</Link>
              </li>
            </ul>
          </div> */}
          {/* Quick Links */}
          {/* <div className="col-lg-4 col-md-6 mb-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#faqs">FAQs</a>
              </li>
              <li>
                <a href="#help">Help</a>
              </li>
              <li>
                <a href="#terms">Terms</a>
              </li>
              <li>
                <a href="#privacy">Privacy</a>
              </li>
              <li>
                <a href="#sitemap">Site Map</a>
              </li>
            </ul>
          </div> */}
        </div>

        {/* Credits */}
        <div
          className="row p-4 mt-3 mx-0 credits-bar"
          style={{ background: "rgba(256, 256, 256, .05)" }}
        >
          <div className="col-md-6 text-center text-md-left mb-3 mb-md-0">
            <p className="m-0 text-white">
              &copy;
              <a className="font-weight-bold site-link" href="#">
                Moksha Legal Group
              </a>
              . All Rights Reserved.
            </p>
          </div>

          <div className="col-md-6 text-center text-md-right">
            <p className="m-0 text-white">
              Powered by
              <a className="font-weight-bold site-link" href="/#">
                ANRIKA
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

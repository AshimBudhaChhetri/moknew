import React, { useState } from "react";
import "./Aboutpage.scss"; // SCSS for custom styling
import Bannerimg from "../../Assets/img/aboutimg.jpg";
import aboutimg2 from "../../Assets/img/aboutimg2.jpg";
import Seema from "../../Assets/img/Seema.png";
import teamImg3 from "../../Assets/img/team-3.jpg";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Banner from "../Banner";

const Aboutpage = () => {
  const [activeTab, setActiveTab] = useState("attorneys");

  const content = {
    attorneys: {
      heading: "Our Attorneys",
      description:
        "Our attorneys are the cornerstone of Moksha Legal Group’s commitment to providing the best legal services in Nepal. Each member of our team brings a wealth of experience, specialized knowledge, and a deep dedication to achieving the best outcomes for our clients.",
    },
    expertise: {
      heading: "Our Expertise",
      description:
        "We pride ourselves on our collaborative approach, ensuring that every case benefits from the collective expertise of our diverse legal team.",
    },
    firm: {
      heading: "Our Firm",
      description:
        "Our firm is dedicated to delivering exceptional service and results for our clients, built on a foundation of trust and respect.",
    },
  };

  const teamMembers = [
    {
      id: 1,
      name: "SEEMA ADHIKARI",
      position: "Founding Partner",
      img: Seema,
      facebook: "https://facebook.com/johndoe",
      linkedin: "https://linkedin.com/in/johndoe",
    },
    {
      id: 2,
      name: "Jane Smith",
      img: teamImg3,
      facebook: "https://facebook.com/janesmith",
      linkedin: "https://linkedin.com/in/janesmith",
    },
    {
      id: 3,
      name: "Alice Johnson",
      img: teamImg3,
      facebook: "https://facebook.com/alicejohnson",
      linkedin: "https://linkedin.com/in/alicejohnson",
    },
  ];

  const services = [
    {
      id: 1,
      title: "Request Quote",
      description:
        "Our experienced attorneys are ready to provide personalized solutions to meet your goals.",
      icon: "fas fa-envelope", // Font Awesome icon
      backgroundClass: "bg-orange", // For hover color
    },
    {
      id: 2,
      title: "Investigation",
      description:
        "Our experienced attorneys are ready to provide personalized solutions to meet your goals.",
      icon: "fas fa-search",
      backgroundClass: "bg-orange", // Default color
    },
    {
      id: 3,
      title: "Case Fight",
      description:
        "Our experienced attorneys are ready to provide personalized solutions to meet your goals.",
      icon: "fas fa-fist-raised",
      backgroundClass: "bg-orange",
    },
  ];

  return (
    <div className="about-page">
      {/* Banner Section */}
      <Banner
        title="About Us"
        subtitle="Who We Are"
        backgroundImage={Bannerimg}
      />
      {/* Who We Are Section */}
      <div className="who-we-are-section py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="content">
                <p className="title">Who We Are</p>
                <h2 className="main-heading">Best Law Firm in Nepal</h2>
                <p style={{ textAlign: "justify" }}>
                  Moksha Legal Group is a leading full-service law firm in
                  Nepal, renowned for providing precise and effective legal
                  solutions to meet the unique needs of businesses and
                  individuals. Our experienced legal professionals possess an
                  in-depth understanding of the Nepali legal system, ensuring
                  reliable and result-oriented services.
                </p>
                <p style={{ textAlign: "justify" }}>
                  We specialize in a wide range of practice areas, including
                  business incorporation in Nepal, foreign investment
                  consulting, corporate and civil litigation, dispute
                  resolution, labor law, intellectual property protection,
                  banking law, and taxation services.
                </p>
                <p style={{ textAlign: "justify" }}>
                  With a proven track record of delivering innovative and
                  result-driven legal services, Moksha Legal Group is dedicated
                  to helping businesses and individuals navigate the
                  complexities of the Nepali legal landscape efficiently and
                  effectively.
                </p>
                <p style={{ textAlign: "justify" }}>
                  By partnering with Moksha Legal Group, you gain access to a
                  top law firm in Nepal that prioritizes client satisfaction,
                  ensures compliance with legal and regulatory requirements, and
                  supports your success in the competitive global
                  business market.
                </p>
              </div>
            </div>
            <div className="col-md-6 position-relative">
              <div className="stats">
                <img alt="Team Photo" className="img-fluid rounded" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutpage;

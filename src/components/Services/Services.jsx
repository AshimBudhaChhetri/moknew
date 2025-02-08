import React from "react";
import { useNavigate } from "react-router-dom";
import "./Services.scss";
import Banner from "../../components/Banner";
import Bannerimg from "../../Assets/img/services.jpg";

const servicesData = [
  {
    id: 1,
    title: "Labor",
    description: "Innovative strategies for labor-related challenges.",
    image:
      "https://www.madebydesignesia.com/themes/justica/images/practice-areas/1.jpg",
    icon: "fa-users",
  },
  {
    id: 2,
    title: "Medical & Health Care",
    description: "Legal support for medical and health care services.",
    image:
      "https://www.madebydesignesia.com/themes/justica/images/practice-areas/2.jpg",
    icon: "fa-stethoscope",
  },
  {
    id: 3,
    title: "Mining",
    description: "Expert guidance for the mining industry.",
    image:
      "https://www.madebydesignesia.com/themes/justica/images/practice-areas/3.jpg",
    icon: "fa-gem",
  },
  {
    id: 4,
    title: "Civil & Criminal",
    description: "Reliable legal advice for civil and criminal cases.",
    image:
      "https://www.madebydesignesia.com/themes/justica/images/practice-areas/4.jpg",
    icon: "fa-gavel",
  },
  {
    id: 5,
    title: "Family & Marriage",
    description: "Solutions for family and marriage law matters.",
    image:
      "https://www.madebydesignesia.com/themes/justica/images/practice-areas/5.jpg",
    icon: "fa-users",
  },
  {
    id: 6,
    title: "Corporate & Investment",
    description: "Strategic legal advice for corporate ventures.",
    image:
      "https://www.madebydesignesia.com/themes/justica/images/practice-areas/6.jpg",
    icon: "fa-briefcase",
  },
];

const Services = () => {
  const navigate = useNavigate();

  return (
    <div className="services-page">
      {/* Banner Section */}
      <Banner
        title={
          <>
            Our <em style={{ color: "#ac835d" }}>Services</em>
          </>
        }
        subtitle={<em>Reputation, Respect, and Results</em>}
        backgroundImage={Bannerimg}
      />

      {/* Services Section */}
      <div className="our-services-section py-5">
        <div className="container">
          <div className="row">
            {servicesData.map((service) => (
              <div
                key={service.id}
                className="col-md-4 mb-4"
                style={{ cursor: "pointer" }}
                // onClick={() => navigate(`/services/${service.id}`)}
              >
                <div
                  className="service-card position-relative text-center"
                  style={{
                    backgroundImage: `url(${service.image})`,
                  }}
                >
                  <div className="inner-content w-100 h-100 position-relative p-3">
                    <div className="overlay-outer position-relative w-100 h-100">
                      <div className="overlay position-absolute w-100 h-100">
                        {/* Default View */}
                        <div className="default-view position-absolute w-100 h-100 d-flex flex-column justify-content-center align-items-center">
                          <i className={`fas ${service.icon} fa-2x mb-3`}></i>
                          <h4 className="text-white">{service.title}</h4>
                        </div>
                        {/* Hover View */}
                        <div className="hover-view position-absolute w-100 h-100 d-flex flex-column justify-content-center align-items-center">
                          <p className="description">{service.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;

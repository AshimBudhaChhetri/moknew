import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ServicesDetail.scss";
import Banner from "../Banner";
import Bannerimg from "../../Assets/img/services.jpg";

const services = [
  "Labor",
  "Medical & Health Care",
  "Mining",
  "Civil & Criminal",
  "Family & Marriage",
  "Corporate & Investment",
];

const serviceContent = {
  Labor: "Innovative strategies for labor-related challenges.",
  "Medical & Health Care":
    "Legal support for medical and health care services.",
  Mining: "Expert guidance for the mining industry.",
  "Civil & Criminal": "Reliable legal advice for civil and criminal cases.",
  "Family & Marriage": "Solutions for family and marriage law matters.",
  "Corporate & Investment": "Strategic legal advice for corporate ventures.",
};

const ServiceDetail = () => {
  const [selectedService, setSelectedService] = useState(services[0]);

  return (
    <div className="service-container">
      {/* Banner Section */}
      <Banner
        title="Our Services"
        subtitle="Reputation, Respect, Result"
        backgroundImage={Bannerimg}
      />

      {/* Main Content */}
      <div className="container-fluid py-4">
        <div className="row">
          {/* Sidebar Section */}
          <div className="col-md-3 col-lg-3 bg-light border p-3">
            <h5 className="mb-3">Services</h5>
            {services.map((service) => (
              <div
                key={service}
                className={`p-2 border-bottom ${
                  selectedService === service
                    ? "fw-bold text-primary"
                    : "text-dark"
                } cursor-pointer`}
                onClick={() => setSelectedService(service)}
                style={{ cursor: "pointer" }}
              >
                {service}
              </div>
            ))}
          </div>

          {/* Content Section */}
          <div className="col-md-9 col-lg-9">
            <div className="border p-4">
              <img
                src="https://via.placeholder.com/800x400"
                alt="Service Banner"
                className="img-fluid mb-3"
              />
              <h2 className="mb-3">{selectedService}</h2>
              <p>{serviceContent[selectedService]}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;

import React from "react";
import "./PracticeAreas.scss";
import { FaBalanceScale, FaBriefcase, FaGavel, FaUsers } from "react-icons/fa";

const practiceAreas = [
  { title: "Family Law", icon: <FaUsers /> },
  { title: "Business Law", icon: <FaBriefcase /> },
  { title: "Criminal Law", icon: <FaGavel /> },
  { title: "Civil Law", icon: <FaBalanceScale /> },
];

const PracticeAreas = () => {
  return (
    <div className="practice-areas container py-5">
      <div className="row align-items-center">
        {/* Left Section */}
        <div className="col-md-5 text-section">
          {/* Icon and Subheading Side by Side */}
          <div className="d-flex align-items-center">
            <div className="icon-container">
              <FaBalanceScale className="icon" />
            </div>
            <p className="subheading">Legal case studies</p>
          </div>

          <h2>
            General & Legal <br /> <span>Practice Areas</span>
          </h2>
          <p className="description">
            Lawyer sit amet risus ac duin auctor posuere fanish amet the acinia
            lecra fermen.
          </p>
          <button className="btn discover-btn">Discover more</button>
        </div>

        {/* Right Section - Grid Layout */}
        <div className="col-md-7">
          <div className="practice-grid">
            {practiceAreas.map((area, index) => (
              <div key={index} className="practice-card">
                <div className="icon">{area.icon}</div>
                <p>{area.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PracticeAreas;

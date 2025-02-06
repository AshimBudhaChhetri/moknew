import React from "react";
import "./Banner.scss";
const Banner = ({ title, subtitle, backgroundImage }) => {
  return (
    <div
      className="banner-section"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="container-fluid p-0">
        <div className="row no-gutters">
          <div className="col-12">
            <div className="banner-image">
              <div className="banner-text text-center">
                <h1 className="display-4 text-white">{title}</h1>
                <p className="text-white">{subtitle}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

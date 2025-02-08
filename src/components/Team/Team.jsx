import React from "react";
import "./Team.scss"; // Import SCSS for styling
import Seema from "../../Assets/img/SeemaCEO.png";
import teamImg3 from "../../Assets/img/team-3.jpg";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Bannerimg from "../../Assets/img/aboutimg.jpg";
import Banner from "../Banner";

const Team = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Seema Adhikari",
      position: "Criminal Lawyer",
      img: Seema,
      facebook: "https://facebook.com/johndoe",
      twitter: "https://twitter.com/johndoe",
      instagram: "https://instagram.com/johndoe",
      linkedin: "https://linkedin.com/in/johndoe",
    },
  ];

  return (
    <>
      {/* Banner Section */}
      <Banner
        title={
          <>
            Meet Our <em style={{ color: "#ac835d" }}>Team</em>
          </>
        }
        subtitle={<em>Qualified Experts</em>}
        backgroundImage={Bannerimg}
      />

      {/* Team Section */}
      <section id="our-team" className="team-section py-5">
        <div className="container">
          {/* <h2 className="text-center mb-5">Meet Our Team</h2> */}
          <div className="row justify-content-center">
            {teamMembers.map((member) => (
              <div key={member.id} className="col-lg-3 col-md-6 mb-4">
                <div className="team-member text-center">
                  <div className="image-container">
                    <img
                      src={member.img}
                      alt={member.name}
                      className="img-fluid"
                    />
                    <div className="social-overlay">
                      <a
                        href={member.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fab fa-facebook-f"></i>
                      </a>
                      <a
                        href={member.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fab fa-twitter"></i>
                      </a>
                      <a
                        href={member.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fab fa-instagram"></i>
                      </a>
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                    </div>
                  </div>
                  <h5 className="mt-3">{member.name}</h5>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;

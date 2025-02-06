import React from "react";
import "./Team.scss"; // SCSS for custom styling
import Seema from "../../Assets/img/SeemaCEO.png";
import teamImg3 from "../../Assets/img/team-3.jpg";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Bannerimg from "../../Assets/img/aboutimg.jpg";
import Banner from "../Banner";

const Team = () => {
  const teamMembers = [
    {
      id: 1,
      name: "SEEMA ADHIKARI",
      position: "Founding Partner",
      img: Seema,
      facebook: "https://facebook.com/johndoe",
      linkedin: "https://linkedin.com/in/johndoe",
    },
    // {
    //   id: 2,
    //   name: "Jane Smith",
    //   img: teamImg3,
    //   facebook: "https://facebook.com/janesmith",
    //   linkedin: "https://linkedin.com/in/janesmith",
    // },
    // {
    //   id: 3,
    //   name: "Alice Johnson",
    //   img: teamImg3,
    //   facebook: "https://facebook.com/alicejohnson",
    //   linkedin: "https://linkedin.com/in/alicejohnson",
    // },
  ];

  return (
    <>
      {/* Banner Section */}
      <Banner
        title="Our Team"
        subtitle="Reputation, Respect, Result"
        backgroundImage={Bannerimg}
      />

      {/* Team Section */}
      <section id="our-team" className="team-section py-5">
        <div className="container">
          <h2 className="text-center mb-5">Meet Our Team</h2>
          <div className="row">
            {teamMembers.map((member) => (
              <div key={member.id} className="col-lg-4 col-md-6 mb-4">
                <div className="team-member position-relative">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="img-fluid rounded shadow"
                  />
                  <div className="overlay d-flex align-items-center justify-content-center">
                    <div className="social-icons">
                      <a
                        href={member.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="icon mx-2"
                      >
                        <i className="fab fa-facebook-f"></i>
                      </a>
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="icon mx-2"
                      >
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                    </div>
                  </div>
                  <h5 className="mt-3 text-center">{member.name}</h5>
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

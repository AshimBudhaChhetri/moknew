import React from "react";
import Hero from "./Herosection/Hero";
import Practice from "./Practice/Practice";
import Choose from "./Choose/Choose";
import Cta from "./Cta/Cta";
const Homepage = () => {
  return (
    <div>
      <Hero />
      <Practice />
      <Choose />
      <Cta />
    </div>
  );
};

export default Homepage;

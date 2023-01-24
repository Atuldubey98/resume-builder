import React from "react";
import HeroLeft from "./HeroLeft";
import HeroRight from "./HeroRight";
import "./LandingBody.css";
const LandingBody = () => {
  return (
    <div className="landing__body">
      <HeroLeft />
      <HeroRight />
    </div>
  );
};

export default LandingBody;

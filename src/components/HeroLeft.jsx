import React from "react";
import { ButtonWithIcon } from "./ButtonWithIcon";
import "./HeroLeft.css";
const HeroLeft = () => {
  const buttonIconProps = {
    to: "/designer",
    text: "Design a Resume",
    icon: <i className="fa-regular fa-file-image icon" />,
  };
  return (
    <div className="hero__left">
      <div className="hero__info">
        <h1>Make beautiful resumes with simple clicks !</h1>
        <p>Tool to make resumes and land your dream job</p>
      </div>
      <ButtonWithIcon {...buttonIconProps} />
    </div>
  );
};

export default HeroLeft;

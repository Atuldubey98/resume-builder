import React from "react";
import Contact from "./normalComponents/Contact";
import Experience from "./normalComponents/Experience";
import Education from "./normalComponents/Education";
import Profile from "./normalComponents/Profile";
import Award from "./normalComponents/Award";
import "./TemplateNormal.css";
import Project from "./normalComponents/Project";
import Skill from "./normalComponents/Skill";
import Volunteering from "./normalComponents/Volunteering";
import Language from "./normalComponents/Language";
const TemplateNormal = () => {
  return (
    <div className="template__normal">
      <Contact />
      <Profile />
      <Experience />
      <Education />
      <Project />
      <Award />
      <Skill />
      <Volunteering />
      <Language />
    </div>
  );
};

export default TemplateNormal;

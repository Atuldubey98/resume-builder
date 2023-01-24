import React, { useContext } from "react";
import { UIContext } from "../../contexts/UIContext";
import AddModal from "../AddModal";
import ContentButton from "./ContentButton";
import "./ContentInformation.css";
import ExpInformation from "./ExpInformation";
import EducationInformation from "./EducationInformation";
import ProfileInformation from "./ProfileInformation";
import ProjectInformation from "./ProjectInformation";
import AwardsInformation from "./AwardsInformation";
import VolunteeringInformation from "./VolunteeringInformation";
import SkillInformation from "./SkillInformation";
import {
  CONTENT_INFORMATION_NUMBER,
  ON_TOGGLE_CONTENT,
} from "../../constants/uiConstants";

const ContentInformation = () => {
  const { state } = useContext(UIContext);

  const children = [
    {
      name: "Profile / Summary",
      component: <ProfileInformation name={"Profile / Summary"} />,
    },
    {
      name: "Experience",
      component: <ExpInformation name={"Experience"} />,
    },
    {
      name: "Education",
      component: <EducationInformation name="Education" />,
    },
    {
      name: "Projects",
      component: <ProjectInformation name="Projects" />,
    },
    {
      name: "Awards",
      component: <AwardsInformation name="Awards" />,
    },
    {
      name: "Volunteering",
      component: <VolunteeringInformation name="Volunteering" />,
    },
    {
      name: "Skills",
      component: <SkillInformation name="Skills" />,
    },
  ];
  const contentButton = {
    children,
    main: "Add Content....",
    type: CONTENT_INFORMATION_NUMBER,
  };
  return (
    <div className="content__info">
      <h2>Content</h2>
      <p>Add entries and adjust the order of sections & entries.</p>
      <ContentButton {...contentButton} />
      <AddModal>{children[state.contentNumber].component}</AddModal>
    </div>
  );
};

export default ContentInformation;

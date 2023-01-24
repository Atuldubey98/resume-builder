import React from "react";
import { useContext } from "react";
import "./Project.css";
import { FormContext } from "../../../contexts/FormContext";
import WrapperEditDelete from "../../WrapperEditDelete";
const Project = () => {
  const { state } = useContext(FormContext);
  function ProjectComponent(project) {
    const { title, type, dates, reason, description } = project;
    return (
      <div className="project">
        <div className="project__title">
          <span>{title} </span>
          <span>{type}</span>
        </div>
        <div className="project__dates">
          <span>{dates} </span>
          <span>{reason}</span>
        </div>
        <p>{description}</p>
      </div>
    );
  }
  const { projects } = state;
  if (projects.length <= 0) {
    return null;
  }
  return (
    <div className="projects">
      <h4>Projects</h4>
      {projects.map((project) => (
        <WrapperEditDelete
          key={project.id}
          object={{ id :  project.id, formField: "projects" }}
        >
          <ProjectComponent {...project} />
        </WrapperEditDelete>
      ))}
    </div>
  );
};

export default Project;

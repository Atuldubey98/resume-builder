import React from "react";
import { useContext } from "react";
import "./Experience.css";
import { FormContext } from "../../../contexts/FormContext";
import WrapperEditDelete from "../../WrapperEditDelete";
const Experience = () => {
  const { state } = useContext(FormContext);
  function ExpComponent(exp) {
    const { title, company, dates, location, description } = exp;
    return (
      <div className="exp">
        <div className="exp__title">
          <span>{title} </span>
          <span>{company}</span>
        </div>
        <div className="exp__dateLocation">
          <span className="exp__date">{dates} </span>
          <span>{location}</span>
        </div>
        <p>{description}</p>
      </div>
    );
  }
  const { exps } = state;
  if (exps.length <= 0) {
    return null;
  }
  return (
    <div className="experience">
      <h3>Work & Experience</h3>
      {exps.map((exp) => (
        <WrapperEditDelete
          key={exp.id}
          object={{ formField: "exps", id: exp.id }}
        >
          <ExpComponent {...exp} />
        </WrapperEditDelete>
      ))}
    </div>
  );
};

export default Experience;

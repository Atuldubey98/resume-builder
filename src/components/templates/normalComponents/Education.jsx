import React, { useContext } from "react";
import { FormContext } from "../../../contexts/FormContext";
import WrapperEditDelete from "../../WrapperEditDelete";
import "./Education.css";
const Education = () => {
  const { state } = useContext(FormContext);
  function EduComponent(edu) {
    const { degree, area, school, dates, description } = edu;
    return (
      <div className="edu">
        <div className="edu__title">
          <span>{degree} </span>
          <span>{area}</span>
        </div>
        <div className="edu__schoolDates">
          <span>{school} </span>
          <span className="edu__dates">{dates}</span>
        </div>
        <p>{description}</p>
      </div>
    );
  }
  const { edus } = state;
  if (edus.length <= 0) {
    return null;
  }
  return (
    <div className="education">
      <h4>Education</h4>
      {edus.map((edu) => (
        <WrapperEditDelete
          key={edu.id}
          object={{ id: edu.id, formField: "edus" }}
        >
          <EduComponent {...edu} />
        </WrapperEditDelete>
      ))}
    </div>
  );
};

export default Education;

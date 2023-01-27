import React, { useContext } from "react";
import { FormContext } from "../../../contexts/FormContext";
import WrapperEditDelete from "../../WrapperEditDelete";
import "./Skill.css";
const Skill = () => {
  const { state } = useContext(FormContext);
  const { skills } = state;
  function SkillComponent(skill) {
    const { name, value } = skill;
    return (
      <div className="skill">
        <h3>{name}</h3>
        <div className="skill__value">
          {Array.from(Array(parseInt(value)).keys()).map((val) => {
            return <i key={val} className="fa-solid fa-star skill__star" />;
          })}
        </div>
      </div>
    );
  }
  if (skills.length <= 0) {
    return null;
  }
  return (
    <div className="skills">
      <h4>Skills</h4>
      <div className="skill__star">
        {skills.map((skill) => (
          <WrapperEditDelete
            key={skill.id}
            object={{ id: skill.id, formField: "skills" }}
          >
            <SkillComponent {...skill} />
          </WrapperEditDelete>
        ))}
      </div>
    </div>
  );
};

export default Skill;

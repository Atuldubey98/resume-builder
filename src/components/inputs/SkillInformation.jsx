import React, { useContext } from "react";
import { ON_SKILL_ADD, ON_SKILL_CHANGE } from "../../constants/formConstants";
import { CLOSE_MODAL } from "../../constants/uiConstants";
import { FormContext } from "../../contexts/FormContext";
import { UIContext } from "../../contexts/UIContext";
import Input from "../Input";
import ModalButtons from "../ModalButtons";
import "./SkillInformation.css";
const SkillInformation = ({ name }) => {
  const { state, formDispatch } = useContext(FormContext);
  const { uiDispatch } = useContext(UIContext);

  function onSubmit(e) {
    e.preventDefault();
    if (state.skill.id === 0) {
      state.skill.id = Date.now();
    }
    formDispatch({ type: ON_SKILL_ADD, payload: state.skill });
    uiDispatch({ type: CLOSE_MODAL });
  }
  function onChange(e) {
    const { name, value } = e.target;
    formDispatch({ type: ON_SKILL_CHANGE, payload: { value, name } });
  }
  const inputProps = {
    name: "name",
    onChange,
    style: {
      width: "250px",
    },
    label: "Skill Name",
    value: state.skill.name,
  };
  const sliderProps = {
    name: "value",
    onChange,
    label: "Level",
    value: state.skill.value,
    type: "range",
    min: 0,
    max: 10,
    step: 1,
    style: {
      width: "250px",
    },
  };
  return (
    <div className="skill__info">
      <h2>{name}</h2>
      <p>
        List a single skill and give yourself a rating (1-10) for that skill.
        The skill section is a visual display and should be placed in a narrow
        column on your reusme.
      </p>
      <form onSubmit={onSubmit}>
        <Input {...inputProps} />
        <Input {...sliderProps} />
        <ModalButtons />
      </form>
    </div>
  );
};

export default SkillInformation;

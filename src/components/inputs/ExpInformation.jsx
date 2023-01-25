import React from "react";
import { useContext } from "react";
import { ON_EXP_ADD, ON_EXP_CHANGE } from "../../constants/formConstants";
import { CLOSE_MODAL } from "../../constants/uiConstants";
import { FormContext } from "../../contexts/FormContext";
import { UIContext } from "../../contexts/UIContext";
import Input from "../Input";
import ModalButtons from "../ModalButtons";
import { TextArea } from "../TextArea";
import "./ExpInformation.css";
const ExpInformation = ({ name }) => {
  const { state, formDispatch } = useContext(FormContext);
  const { uiDispatch } = useContext(UIContext);

  const onChange = (e) => {
    const { name, value } = e.target;
    formDispatch({
      type: ON_EXP_CHANGE,
      payload: { name, value },
    });
  };
  const inputs = [
    {
      label: "Job Title",
      name: "title",
      onChange,
      value: state.experience.title,
      style: {
        width: "230px",
      },
    },
    {
      name: "company",
      label: "Employer Or Company",
      onChange,
      value: state.experience.company,
      style: {
        width: "230px",
      },
    },
    {
      name: "dates",
      label: "Employment Dates",
      onChange,
      value: state.experience.dates,
      style: {
        width: "230px",
      },
    },
    {
      name: "location",
      label: "Company Location",
      onChange,
      value: state.experience.location,
      style: {
        width: "230px",
      },
    },
  ];
  const textAreaProps = {
    name: "description",
    label: "Job Description & Accompalishments",
    onChange,
    value: state.experience.description,
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (state.experience.id === 0) {
      state.experience.id = Date.now();
    }
    formDispatch({ type: ON_EXP_ADD, payload: state.experience });
    uiDispatch({ type: CLOSE_MODAL });
  };
  return (
    <div className="exp__info">
      <h2>{name}</h2>
      <p>Work & Experiences</p>
      <form onSubmit={onSubmit} className="exp__form">
        {inputs.map((input) => (
          <Input {...input} key={input.label} />
        ))}
        <TextArea {...textAreaProps} />
        <ModalButtons />
      </form>
    </div>
  );
};

export default ExpInformation;

import React, { useContext } from "react";
import { ON_EDU_ADD, ON_EDU_CHANGE } from "../../constants/formConstants";
import { CLOSE_MODAL } from "../../constants/uiConstants";
import { FormContext } from "../../contexts/FormContext";
import { UIContext } from "../../contexts/UIContext";
import Input from "../Input";
import ModalButtons from "../ModalButtons";
import { TextArea } from "../TextArea";
import "./EducationInformation.css";
const EducationInformation = ({ name }) => {
  const { state, formDispatch } = useContext(FormContext);
  const { uiDispatch } = useContext(UIContext);

  const onSubmit = (e) => {
    e.preventDefault();
    if (state.education.id === 0) {
      state.education.id = Date.now();
    }
    formDispatch({ type: ON_EDU_ADD, payload: state.education });
    uiDispatch({ type: CLOSE_MODAL });
  };
  const onChange = (e) => {
    const { name, value } = e.target;
    formDispatch({ type: ON_EDU_CHANGE, payload: { name, value } });
  };
  const inputs = [
    {
      label: "Degree",
      name: "degree",
      value: state.education.degree,
      onChange,
      style: {
        width: "180px",
      },
    },
    {
      name: "area",
      label: "Area of Study",
      value: state.education.area,
      onChange,
      style: {
        width: "180px",
      },
    },
    {
      value: state.education.school,
      name: "school",
      label: "School or College",
      onChange,
      style: {
        width: "180px",
      },
    },
    {
      name: "dates",
      value: state.education.dates,
      label: "Dates",
      onChange,
      style: {
        width: "180px",
      },
    },
  ];
  const textAreaProps = {
    name: "description",
    label: "Description or Honours",
    onChange,
    value: state.education.description,
  };
  return (
    <div className="edu__info">
      <h2>{name}</h2>
      <form onSubmit={onSubmit} className="edu__form">
        {inputs.map((input) => (
          <Input {...input} key={input.label} />
        ))}
        <TextArea {...textAreaProps} />
        <ModalButtons />
      </form>
    </div>
  );
};

export default EducationInformation;

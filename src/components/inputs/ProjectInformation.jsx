import React, { useContext } from "react";
import {
  ON_PROJECT_ADD,
  ON_PROJECT_CHANGE,
} from "../../constants/formConstants";
import { CLOSE_MODAL } from "../../constants/uiConstants";
import { FormContext } from "../../contexts/FormContext";
import { UIContext } from "../../contexts/UIContext";
import Input from "../Input";
import ModalButtons from "../ModalButtons";
import { TextArea } from "../TextArea";
import "./ProjectInformation.css";
const ProjectInformation = ({ name }) => {
  const { state, formDispatch } = useContext(FormContext);
  const { uiDispatch } = useContext(UIContext);
  const { title, type, dates, reason, description } = state.project;
  const onSubmit = (e) => {
    e.preventDefault();
    if (state.project.id === 0) {
      state.project.id = Date.now();
    }
    formDispatch({ type: ON_PROJECT_ADD, payload: state.project });
    uiDispatch({ type: CLOSE_MODAL });
  };
  const onChange = (e) => {
    const { name, value } = e.target;
    formDispatch({ type: ON_PROJECT_CHANGE, payload: { name, value } });
  };
  const inputs = [
    {
      label: "Title",
      name: "title",
      value: title,
      onChange,
      style: {
        width: "230px",
      },
    },
    {
      name: "type",
      label: "Type of Project",
      value: type,
      onChange,
      style: {
        width: "230px",
      },
    },
    {
      value: dates,
      name: "dates",
      label: "Project Date",
      onChange,
      style: {
        width: "230px",
      },
    },
    {
      name: "reason",
      value: reason,
      label: "Reason or Purpose",
      onChange,
      style: {
        width: "230px",
      },
    },
  ];
  const textAreaProps = {
    name: "description",
    label: "Project Description",
    onChange,
    value: description,
  };
  return (
    <div className="project__info">
      <h2>{name}</h2>
      <form onSubmit={onSubmit} className="project__form">
        {inputs.map((input) => (
          <Input {...input} key={input.label} />
        ))}
        <TextArea {...textAreaProps} />
        <ModalButtons />
      </form>
    </div>
  );
};

export default ProjectInformation;

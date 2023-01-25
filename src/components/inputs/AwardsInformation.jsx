import React, { useContext } from "react";
import { ON_AWARDS_ADD, ON_AWARDS_CHANGE } from "../../constants/formConstants";
import { CLOSE_MODAL } from "../../constants/uiConstants";
import { FormContext } from "../../contexts/FormContext";
import { UIContext } from "../../contexts/UIContext";
import Input from "../Input";
import ModalButtons from "../ModalButtons";
import { TextArea } from "../TextArea";
import "./AwardsInformation.css";
const AwardsInformation = ({ name }) => {
  const { state, formDispatch } = useContext(FormContext);
  const { uiDispatch } = useContext(UIContext);
  const { title, receivedFrom, dates, link, description } = state.award;
  const onSubmit = (e) => {
    e.preventDefault();
    if (state.award.id === 0) {
      state.award.id = Date.now();
    }
    formDispatch({ type: ON_AWARDS_ADD, payload: state.award });
    uiDispatch({ type: CLOSE_MODAL });
  };
  const onChange = (e) => {
    const { name, value } = e.target;
    formDispatch({ type: ON_AWARDS_CHANGE, payload: { name, value } });
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
      name: "receivedFrom",
      label: "Received From",
      value: receivedFrom,
      onChange,
      style: {
        width: "230px",
      },
    },
    {
      value: dates,
      name: "dates",
      label: "Date or year Received",
      onChange,
      style: {
        width: "230px",
      },
    },
    {
      name: "link",
      value: link,
      label: "Link",
      type: "url",
      onChange,
      style: {
        width: "230px",
      },
    },
  ];
  const textAreaProps = {
    name: "description",
    label: "Award Description",
    onChange,
    value: description,
  };
  return (
    <div className="award__info">
      <h2>{name}</h2>
      <form onSubmit={onSubmit} className="award__form">
        {inputs.map((input) => (
          <Input {...input} key={input.label} />
        ))}
        <TextArea {...textAreaProps} />
        <ModalButtons />
      </form>
    </div>
  );
};

export default AwardsInformation;

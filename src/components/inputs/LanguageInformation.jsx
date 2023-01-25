import React, { useContext } from "react";
import {
  ON_LANGUAGE_ADD,
  ON_LANGUAGE_CHANGE,
} from "../../constants/formConstants";
import { CLOSE_MODAL } from "../../constants/uiConstants";
import { FormContext } from "../../contexts/FormContext";
import { UIContext } from "../../contexts/UIContext";
import Input from "../Input";
import ModalButtons from "../ModalButtons";
import "./LanguageInformation.css";
const LanguageInformation = ({ name }) => {
  const { state, formDispatch } = useContext(FormContext);
  const { uiDispatch } = useContext(UIContext);

  const { language } = state;
  function onChange(e) {
    const { name, value } = e.target;
    formDispatch({ type: ON_LANGUAGE_CHANGE, payload: { value, name } });
  }
  function onSubmit(e) {
    e.preventDefault();
    if (language.id === 0) {
      language.id = Date.now();
    }
    formDispatch({ type: ON_LANGUAGE_ADD, payload: language });
    uiDispatch({ type: CLOSE_MODAL });
  }
  const inputProps = {
    name: "name",
    onChange,
    style: {
      width: "250px",
    },
    label: "Langauge",
    value: language.name,
  };
  const sliderProps = {
    name: "value",
    onChange,
    label: "Level",
    value: language.value,
    type: "range",
    min: 1,
    max: 3,
    step: 1,
    style: {
      width: "250px",
    },
  };
  const value = parseInt(language.value, 0);
  return (
    <div className="language__info">
      <h2>{name}</h2>
      <p>Add the langauges below</p>
      <form onSubmit={onSubmit}>
        <Input {...inputProps} />
        <div className="language__map">
          <Input {...sliderProps} />
          <span>
            {value === 1
              ? "Read"
              : value === 2
              ? "Read & Write"
              : value === 3
              ? "Proficient"
              : ""}
          </span>
        </div>
        <ModalButtons />
      </form>
    </div>
  );
};

export default LanguageInformation;

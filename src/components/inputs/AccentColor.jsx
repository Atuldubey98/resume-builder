import React from "react";
import "./AccentColor.css";
import Input from "../Input";
import { useContext } from "react";
import { UIContext } from "../../contexts/UIContext";
import { THEME_TOGGLE } from "../../constants/uiConstants";
const AccentColor = () => {
  const { state, uiDispatch } = useContext(UIContext);
  const onChange = (e) => {
    const { value } = e.target;
    uiDispatch({ type: THEME_TOGGLE, payload: value });
  };
  const inputProps = {
    type: "color",
    label: "Primary Theme Color",
    value: state.theme.color,
    onChange,
  };
  return (
    <div className="accent__color">
      <h2>Accent Color</h2>
      <Input {...inputProps} />
      
    </div>
  );
};

export default AccentColor;

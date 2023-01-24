import React from "react";
import { useContext } from "react";
import { CLOSE_MODAL } from "../constants/uiConstants";
import { UIContext } from "../contexts/UIContext";
import Button from "./Button";
import "./ModalButtons.css";
const ModalButtons = () => {
  const { uiDispatch } = useContext(UIContext);
  const buttonProps = {
    icon: <i className="fa-solid fa-check" />,
    text: "Save Entry",
    type: "submit",
  };

  return (
    <div className="modal__buttons">
      <span
        className="close__button"
        onClick={() => uiDispatch({ type: CLOSE_MODAL })}
      >
        <i className="fa-solid fa-close" /> Cancel
      </span>
      <Button {...buttonProps} />
    </div>
  );
};

export default ModalButtons;

import React from "react";
import { useContext } from "react";
import "./LeftMenuButton.css";
import { UIContext } from "../contexts/UIContext";
const LeftMenuButton = (menuButtonProps) => {
  const { icon, onClick, index } = menuButtonProps;
  const { state } = useContext(UIContext);
  const className =
    index === state.menuNumber ? "leftmenu__btn selected" : "leftmenu__btn";
  return (
    <div onClick={() => onClick(index)} className={className}>
      {icon}
    </div>
  );
};

export default LeftMenuButton;

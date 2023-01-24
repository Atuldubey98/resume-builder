import React, { useContext } from "react";
import { FONT_TOGGLE } from "../../constants/uiConstants";
import { UIContext } from "../../contexts/UIContext";
import ContentButton from "./ContentButton";
import "./FontOrText.css";
const FontOrText = () => {
  const { state } = useContext(UIContext);
  const children = [
    { name: `'Mukta', sans-serif` },
    { name: `'Nunito Sans', sans-serif'` },
    { name: `'Poppins', sans-serif` },
    { name: `'Unbounded', cursive` },
  ];
  const contentButton = {
    children: children.map((child) => {
      return { ...child, payload: child.name };
    }),
    type : FONT_TOGGLE,
    main: state.theme.fontFamily,
  };
  return (
    <div className="fontOrText">
      <h2>Font or Text</h2>
      <p>Change or font or text size</p>
      <ContentButton {...contentButton} />
    </div>
  );
};

export default FontOrText;

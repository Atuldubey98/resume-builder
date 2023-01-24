import React, { useContext, useEffect } from "react";
import { UIContext } from "../contexts/UIContext";
import AccentColor from "./inputs/AccentColor";
import ContactInformation from "./inputs/ContactInformation";
import ContentInformation from "./inputs/ContentInformation";
import FontOrText from "./inputs/FontOrText";
import LayoutChange from "./inputs/LayoutChange";
import SaveOrPrint from "./inputs/SaveOrPrint";
import "./LeftFormDialogue.css";
export const LeftFormDialogue = () => {
  const { state } = useContext(UIContext);
  useEffect(() => {}, [state.menuNumber]);
  const totalForms = [
    <ContactInformation />,
    <ContentInformation />,
    <LayoutChange />,
    <FontOrText />,
    <AccentColor />,
    <SaveOrPrint />,
  ];
  return (
    <div className="left__formDialogue">{totalForms[state.menuNumber]}</div>
  );
};

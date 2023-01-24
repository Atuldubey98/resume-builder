import React from "react";
import LeftMenuBar from "../components/LeftMenuBar";
import { LeftFormDialogue } from "./LeftFormDialogue";
import './InputLayout.css'
const InputLayout = () => {
  return (
    <div className="input__layout">
      <LeftMenuBar />
      <LeftFormDialogue />
      
    </div>
  );
};

export default InputLayout;

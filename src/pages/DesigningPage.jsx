import React from "react";
import { useContext } from "react";
import InputLayout from "../components/InputLayout";
import OutputLayout from "../components/OutputLayout";
import { UIContext } from "../contexts/UIContext";
import "./DesigningPage.css";
const DesigningPage = () => {
  const { printRef } = useContext(UIContext);
  return (
    <div className="design__page">
      <InputLayout />
      <OutputLayout ref={printRef} />
    </div>
  );
};

export default DesigningPage;

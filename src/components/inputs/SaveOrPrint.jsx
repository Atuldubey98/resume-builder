import React from "react";
import usePrint from "../../hooks/usePrint";
import Button from "../Button";
import "./SaveOrPrint.css";
const SaveOrPrint = () => {
  const {buttonProps} = usePrint();
  return (
    <div className="save__print">
      <h2>Save & Print</h2>
      <p>Print & Download the resume for future</p>
      <h3>Print & Download</h3>
      <Button {...buttonProps} />
    </div>
  );
};

export default SaveOrPrint;

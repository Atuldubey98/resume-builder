import React, { useContext } from "react";
import Button from "../Button";
import "./SaveOrPrint.css";
import { useReactToPrint } from "react-to-print";
import { UIContext } from "../../contexts/UIContext";
const SaveOrPrint = () => {
  const { printRef } = useContext(UIContext);
  const buttonProps = {
    text: "Save & Print",
    icon: <i className="fa-sharp fa-solid fa-download" />,
    onClick: useReactToPrint({
      content: () => {
        printRef.current.style.boxShadow = "none";
        setTimeout(() => {
          printRef.current.style.boxShadow = "0 0 10px lightgrey";
        }, 2000);
        return printRef.current;
      },
    }),
  };
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

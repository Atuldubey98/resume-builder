import React from "react";
import "./Input.css";
const Input = (inputProps) => {
  const { label, children, ...input } = inputProps;
  return (
    <div className="input__control">
      <label htmlFor={label}>{label}</label>
      <input {...input} />
      {children}
    </div>
  );
};

export default Input;

import React from "react";
import "./TextArea.css";
export const TextArea = (textAreaProps) => {
  const { label, name, onChange, value } = textAreaProps;
  return (
    <div className="input__control">
      <label htmlFor={label}>{label}</label>
      <textarea
        name={name}
        id={name}
        cols="32"
        rows="10"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

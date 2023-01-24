import React from "react";
import "./Button.css";
const Button = (buttonProps) => {
  const { icon, text, onClick } = buttonProps;
  if (!icon) {
    return <button>{text}</button>;
  }
  return (
    <button onClick={onClick}>
      {icon}
      {text}
    </button>
  );
};

export default Button;

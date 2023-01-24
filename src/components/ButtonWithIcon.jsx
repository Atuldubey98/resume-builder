import React from "react";
import { Link } from "react-router-dom";
import "./ButtonWithIcon.css";
export const ButtonWithIcon = (buttonProps) => {
  const { text, to, icon } = buttonProps;
  return (
    <Link to={to}>
      {icon}
      {text}
    </Link>
  );
};

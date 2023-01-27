import React from "react";
import { Link } from "react-router-dom";
import "./ButtonWithIcon.css";
export const ButtonWithIcon = (buttonProps) => {
  const { text,icon , ...restProps } = buttonProps;
  return (
    <Link {...restProps}>
      {icon}
      {text}
    </Link>
  );
};

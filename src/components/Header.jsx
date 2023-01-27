import React from "react";
import logo from "../assets/logo.png";
import { headerIconProps } from "../constants/propConstants";
import { ButtonWithIcon } from "./ButtonWithIcon";
import "./Header.css";
const Header = () => {
  return (
    <header>
      <img src={logo} alt="logo" />
      <div className="header__links">
        {headerIconProps.map((buttonProps) => (
          <ButtonWithIcon {...buttonProps} key={buttonProps.text} />
        ))}
      </div>
    </header>
  );
};

export default Header;

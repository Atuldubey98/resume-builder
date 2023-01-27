import React from "react";
import "./Header.css";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { ButtonWithIcon } from "./ButtonWithIcon";
const Header = () => {
  const buttons = [
    {
      text: "Create Account",
      to: "/register",
      className: "header__link",
      icon: <i class="fa-solid fa-address-card" />,
    },
    {
      text: "Sign In",
      to: "/login",
      className: "header__link",
      icon: <i class="fa-solid fa-arrow-right-to-bracket" />,
    },
  ];
  return (
    <header>
      <img src={logo} alt="logo" />
      <div className="header__links">
        {buttons.map((buttonProps) => (
          <ButtonWithIcon {...buttonProps} key={buttonProps.text} />
        ))}
      </div>
    </header>
  );
};

export default Header;

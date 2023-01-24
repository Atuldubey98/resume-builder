import React from "react";
import "./Header.css";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header>
      <img src={logo} alt="logo" />
      <div className="header__links">
        <Link to={"/register"} className="header__link">
          <h4>Create Account</h4>
        </Link>
        <Link to={"/login"} className="header__link">
          <h4>Sign In</h4>
        </Link>
      </div>
    </header>
  );
};

export default Header;

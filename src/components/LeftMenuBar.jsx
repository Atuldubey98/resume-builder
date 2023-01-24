import React from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { MENU_NUMBER_CHANGE } from "../constants/uiConstants";
import { UIContext } from "../contexts/UIContext";
import UserService from "../firebaseAPI/UserService";
import "./LeftMenuBar.css";
import LeftMenuButton from "./LeftMenuButton";
const LeftMenuBar = () => {
  const { uiDispatch } = useContext(UIContext);
  const navigate = useNavigate();
  const onClick = (index) => {
    uiDispatch({ type: MENU_NUMBER_CHANGE, payload: index });
  };
  const menuItems = [
    {
      icon: <i className="fa-solid fa-user" />,
      onClick,
      index: 0,
    },
    {
      onClick,
      index: 1,
      icon: <i className="fa-solid fa-pen-to-square" />,
    },
    {
      onClick,
      index: 2,
      icon: <i className="fa-regular fa-file-image" />,
    },
    {
      onClick,
      index: 3,
      icon: <i className="fa-solid fa-a" />,
    },
    {
      onClick,
      index: 4,
      icon: <i className="fa-solid fa-droplet" />,
    },

    {
      onClick,
      index: 5,
      icon: <i className="fa-solid fa-floppy-disk" />,
    },
    {
      onClick: async function () {
        try {
          if (confirm(`You really want to logout ?`)) {
            await UserService.logout();
            navigate("/", { replace: true });
          }
        } catch (error) {
          console.log(error);
          alert("Error occured");
        }
      },
      index: 6,
      icon: <i className="fa-solid fa-right-from-bracket" />,
    },
  ];
  return (
    <div className="left__menuBar">
      <div className="left__menu">
        {menuItems.map((menu, index) => (
          <LeftMenuButton {...menu} key={index} />
        ))}
      </div>
    </div>
  );
};

export default LeftMenuBar;

import React from "react";
import { useContext } from "react";
import { ON_FIELD_REMOVE, ON_FIELD_SET } from "../constants/formConstants";
import { CONTENT_INFORMATION_NUMBER } from "../constants/uiConstants";
import { FormContext } from "../contexts/FormContext";
import { UIContext } from "../contexts/UIContext";
import "./WrapperEditDelete.css";
const WrapperEditDelete = ({ object, children }) => {
  const { formDispatch } = useContext(FormContext);
  const { uiDispatch } = useContext(UIContext);
  const formMap = {
    exps: {
      name: "experience",
      index: 1,
    },
    edus: {
      name: "education",
      index: 2,
    },
    projects: {
      name: "project",
      index: 3,
    },
    awards: {
      index: 4,
      name: "award",
    },
    volunteerings: {
      index: 5,
      name: "volunteering",
    },
    skills: {
      index: 6,
      name: "skill",
    },
    languages: {
      index: 7,
      name: "language",
    },
  };
  const buttons = [
    {
      icon: (
        <i
          className="fa fa-trash"
          aria-hidden="true"
          style={{ color: "white" }}
        />
      ),
      onClick: function () {
        const { id, formField } = object;
        formDispatch({ type: ON_FIELD_REMOVE, payload: { id, formField } });
      },
    },

    {
      icon: (
        <i
          className="fa-solid fa-pen-to-square"
          aria-hidden="true"
          style={{ color: "white" }}
        />
      ),
      onClick: function () {
        const { id, formField } = object;
        const { name, index } = formMap[formField];
        formDispatch({ type: ON_FIELD_SET, payload: { name, id, formField } });
        uiDispatch({
          type: CONTENT_INFORMATION_NUMBER,
          payload: index,
        });
      },
    },
  ];
  return (
    <div className="wrap__editDelete">
      <div className="btn__set">
        {buttons.map((buttonProps, index) => (
          <button
            onClick={buttonProps.onClick}
            style={buttonProps.style}
            key={index}
          >
            {buttonProps.icon}
          </button>
        ))}
      </div>
      {children}
    </div>
  );
};

export default WrapperEditDelete;

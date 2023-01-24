import React, { useContext } from "react";
import {
  CONTENT_INFORMATION_NUMBER,
  ON_TOGGLE_CONTENT,
} from "../../constants/uiConstants";
import { UIContext } from "../../contexts/UIContext";
import "./ContentButton.css";
const ContentButton = (props) => {
  const { state, uiDispatch } = useContext(UIContext);
  const { children, main, type } = props;
  ///Code here
  const onClick = () => {
    uiDispatch({ type: ON_TOGGLE_CONTENT });
  };
  return (
    <div className="content__button">
      {state.openContent ? (
        <ul>
          {children.map(({ name, payload }, index) => (
            <li
              onClick={() => {
                uiDispatch({ type, payload: payload ? payload : index });
              }}
              key={index}
            >
              {name.toUpperCase()}
            </li>
          ))}
          <li style={{ color: "red" }} key={"cancel"} onClick={onClick}>
            Cancel
          </li>
        </ul>
      ) : (
        <div className="btn" onClick={onClick}>
          <span>{main}</span> <i className="fa-solid fa-angle-down" />
        </div>
      )}
    </div>
  );
};

export default ContentButton;

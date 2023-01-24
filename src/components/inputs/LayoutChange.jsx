import React, { useContext } from "react";
import "./LayoutChange.css";
import layout1 from "../../assets/layout1.png";
import { UIContext } from "../../contexts/UIContext";
import { LAYOUT_NUMBER_CHANGE } from "../../constants/uiConstants";
const LayoutChange = () => {
  const { state, uiDispatch } = useContext(UIContext);
  const layouts = [
    {
      src: layout1,
      alt: "layout1",
    },
  ];

  return (
    <div className="layout__change">
      <h2>Layouts available</h2>
      <div className="layouts">
        {layouts.map((layout, index) => (
          <img
            key={layout}
            {...layout}
            className={index === state.layoutNumber ? "selected" : ""}
            onClick={() =>
              uiDispatch({ type: LAYOUT_NUMBER_CHANGE, payload: index })
            }
          />
        ))}
      </div>
    </div>
  );
};

export default LayoutChange;

import React, { useContext, useEffect } from "react";
import TemplateNormal from "../components/templates/TemplateNormal";
import { UIContext } from "../contexts/UIContext";
import usePrint from "../hooks/usePrint";
import "./OutputLayout.css";
const OutputLayout = React.forwardRef((props, ref) => {
  const { state } = useContext(UIContext);
  const { fontFamily, color } = state.theme;
  useEffect(() => {
    document
      .getElementById("output")
      .style.setProperty("--primaryColor", color);
    document
      .getElementById("output")
      .style.setProperty("--fontFamily", fontFamily);
  }, [color, fontFamily]);

  const layOuts = [<TemplateNormal />];
  return (
    <div ref={ref} id="output" className="output__layout">
      {layOuts[state.layoutNumber]}
    </div>
  );
});

export default OutputLayout;

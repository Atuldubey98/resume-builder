import React, { useContext } from "react";
import { FormContext } from "../../../contexts/FormContext";
import WrapperEditDelete from "../../WrapperEditDelete";
import "./Language.css";
const Language = () => {
  const { state } = useContext(FormContext);
  const { languages } = state;
  if (languages.length <= 0) {
    return null;
  }
  return (
    <div className="lang">
      <h4>Languages Known</h4>
      <div className="languages">
        {languages.map((language) => (
          <WrapperEditDelete
            key={language.id}
            object={{ formField: "languages", id: language.id }}
          >
            <LanguageComponent {...language} />
          </WrapperEditDelete>
        ))}
      </div>
    </div>
  );
};

function LanguageComponent(language) {
  const { name, value } = language;

  return (
    <div className="language">
      <span>{name} - </span>
      <span className="language__value">
        {value == 1
          ? "Read"
          : value == 2
          ? "Read & Write"
          : value == 3
          ? "Proficient"
          : ""}
      </span>
    </div>
  );
}
export default Language;

import React from "react";
import { useContext } from "react";
import "./Volunteering.css";
import { FormContext } from "../../../contexts/FormContext";
import WrapperEditDelete from "../../WrapperEditDelete";
const Volunteering = () => {
  const { state } = useContext(FormContext);
  const { volunteerings } = state;
  function VolunteerComponent(volunteering) {
    const { title, dates, organization, description } = volunteering;
    return (
      <div className="volunteering">
        <div className="volutneer__title">
          <p>{organization}</p>
          <span>{title} </span>
          <span className="vol__date">{dates} </span>
        </div>
        <p>{description}</p>
      </div>
    );
  }
  if (volunteerings.length <= 0) {
    return null;
  }
  return (
    <div className="vols">
      <h3>Volunteerings</h3>
      {volunteerings.map((volunteering) => (
        <WrapperEditDelete
          key={volunteering.id}
          object={{ id: volunteering.id, formField: "volunteerings" }}
        >
          <VolunteerComponent {...volunteering} />
        </WrapperEditDelete>
      ))}
    </div>
  );
};

export default Volunteering;

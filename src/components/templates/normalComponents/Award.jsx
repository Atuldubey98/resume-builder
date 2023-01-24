import React, { useContext } from "react";
import { FormContext } from "../../../contexts/FormContext";
import WrapperEditDelete from "../../WrapperEditDelete";
import "./Award.css";
const Award = () => {
  const { state } = useContext(FormContext);
  const { awards } = state;
  function AwardComponent(award) {
    const { title, receivedFrom, dates, link, description } = award;
    return (
      <div className="award">
        <div className="award__title">
          <span>{title} </span>
          <span>{receivedFrom}</span>
        </div>
        <div className="award__schoolDates">
          <span className="award__date">{dates} </span>
          <span>{link}</span>
        </div>
        <p>{description}</p>
      </div>
    );
  }
  if (awards.length <= 0) {
    return null;
  }
  return (
    <div className="awards">
      <h4>Awards</h4>
      {awards.map((award) => (
        <WrapperEditDelete
          key={award.id}
          object={{ id: award.id, formField: "awards" }}
        >
          <AwardComponent {...award} />
        </WrapperEditDelete>
      ))}
    </div>
  );
};

export default Award;

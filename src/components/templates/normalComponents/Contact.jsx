import React, { useContext } from "react";
import { FormContext } from "../../../contexts/FormContext";
import "./Contact.css";

const Contact = () => {
  const { state } = useContext(FormContext);
  const { contact } = state;
  const { title, name, email, phone, social, location } = contact;
  return (
    <div className="contact">
      <div className="contact__name">
        <h1>
          {name} <span>{title}</span>
        </h1>
      </div>
      <div className="contact__infomation">
        <div className="contact__infomationLeft">
          <h5>{email}</h5>
          <h5>{phone}</h5>
        </div>
        <div className="contact__infomationRight">
          <h5>{social}</h5>
          <h5>{location}</h5>
        </div>
      </div>
    </div>
  );
};

export default Contact;

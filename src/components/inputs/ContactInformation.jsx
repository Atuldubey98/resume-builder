import React from "react";
import { useContext } from "react";
import Button from "../Button";
import Input from "../Input";
import { FormContext } from "../../contexts/FormContext";
import { UIContext } from "../../contexts/UIContext";

import "./ContactInformation.css";
import { ON_CONTACT_CHANGE } from "../../constants/formConstants";
import { MENU_NUMBER_CHANGE } from "../../constants/uiConstants";
import {
  getContactProps,
  saveContactProps,
} from "../../constants/propConstants";
const ContactInformation = () => {
  const { state, formDispatch } = useContext(FormContext);
  const { contact } = state;
  const { state: uiState, uiDispatch } = useContext(UIContext);
  const onChange = (e) => {
    const { name, value } = e.target;
    formDispatch({ type: ON_CONTACT_CHANGE, payload: { name, value } });
  };
  const fields = getContactProps(contact, onChange);

  const onSubmit = (e) => {
    e.preventDefault();
    uiDispatch({ type: MENU_NUMBER_CHANGE, payload: ++uiState.menuNumber });
  };

  return (
    <div className="contact__info">
      <h2>Contact Information</h2>
      <p>Add your personnel and contact information</p>
      <form onSubmit={onSubmit}>
        {fields.map((field) => (
          <Input key={field.name} {...field} />
        ))}
        <Button {...saveContactProps} />
      </form>
    </div>
  );
};

export default ContactInformation;

import React from "react";
import { useContext } from "react";
import Button from "../Button";
import Input from "../Input";
import { FormContext } from "../../contexts/FormContext";
import { UIContext } from "../../contexts/UIContext";

import "./ContactInformation.css";
import { ON_CONTACT_CHANGE } from "../../constants/formConstants";
import { MENU_NUMBER_CHANGE } from "../../constants/uiConstants";
const ContactInformation = () => {
  const { state, formDispatch } = useContext(FormContext);
  const { state: uiState, uiDispatch } = useContext(UIContext);
  const onChange = (e) => {
    const { name, value } = e.target;
    formDispatch({ type: ON_CONTACT_CHANGE, payload: { name, value } });
  };
  const fields = [
    {
      name: "name",
      label: "name",
      type: "text",
      value: state.contact.name,
      onChange,
    },
    {
      name: "title",
      onChange,
      type: "text",
      value: state.contact.title,
      label: "Headline or Title",
    },
    {
      name: "email",
      onChange,
      value: state.contact.email,
      label: "Email",
      type: "email",
    },
    {
      name: "phone",
      value: state.contact.phone,
      onChange,
      type: "tel",
      label: "Phone Number",
    },
    {
      name: "social",
      onChange,
      type: "url",
      value: state.contact.social,
      label: "Linkedin or Social",
    },
    {
      name: "location",
      onChange,
      value: state.contact.location,
      label: "Location",
      type: "text",
    },
  ];
  const buttonProps = {
    text: "Save",
    icon: <i className="fa-solid fa-user-plus" />,
  };
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
        <Button {...buttonProps} />
      </form>
    </div>
  );
};

export default ContactInformation;

import React, { useContext } from "react";
import { ON_FIELD_CHANGE } from "../../constants/formConstants";
import { CLOSE_MODAL } from "../../constants/uiConstants";
import { FormContext } from "../../contexts/FormContext";
import { UIContext } from "../../contexts/UIContext";
import ModalButtons from "../ModalButtons";
import { TextArea } from "../TextArea";
import "./ProfileInformation.css";
const ProfileInformation = ({ name }) => {
  const { state, formDispatch } = useContext(FormContext);
  const { uiDispatch } = useContext(UIContext);
  function onSubmit(e) {
    e.preventDefault();
    uiDispatch({ type: CLOSE_MODAL });
  }
  function onChange(e) {
    const { name, value } = e.target;
    formDispatch({ type: ON_FIELD_CHANGE, payload: { name, value } });
  }
  const textAreaProps = {
    label: "Profile",
    name: "profileSummary",
    onChange,
    value: state.profileSummary,
  };
  return (
    <div className="profile__info">
      <div className="modal__heading">
        <h3>{name}</h3>
      </div>
      <p>
        Your profile or summary is just a simple paragraph. It's normally used
        as a quick introduction about yourself.
      </p>
      <form onSubmit={onSubmit}>
        <TextArea {...textAreaProps} />
        <ModalButtons />
      </form>
    </div>
  );
};

export default ProfileInformation;

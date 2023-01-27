import React, { useContext } from "react";
import { CONTENT_INFORMATION_NUMBER } from "../../../constants/uiConstants";
import { FormContext } from "../../../contexts/FormContext";
import { UIContext } from "../../../contexts/UIContext";
import "./Profile.css";
const Profile = () => {
  const { state } = useContext(FormContext);
  const { uiDispatch } = useContext(UIContext);
  if (!state.profileSummary) {
    return null;
  }

  return (
    <div
      onClick={() =>
        uiDispatch({ type: CONTENT_INFORMATION_NUMBER, payload: 0 })
      }
      className="profile"
    >
      <h3>Profile/Summary</h3>
      <p>{state.profileSummary}</p>
    </div>
  );
};

export default Profile;

import React, { memo, useContext } from "react";
import Modal from "react-modal";
import { CLOSE_MODAL } from "../constants/uiConstants";
import { UIContext } from "../contexts/UIContext";
const AddModal = ({ children }) => {
  Modal.setAppElement("#root");
  const { state, uiDispatch } = useContext(UIContext);
  
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };
  return (
    <Modal
      isOpen={state.openModal}
      onRequestClose={() => uiDispatch({ type: CLOSE_MODAL })}
      style={customStyles}
      contentLabel="Label"
    >
      {children}
    </Modal>
  );
};

export default memo(AddModal);

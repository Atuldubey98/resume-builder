import { useContext } from "react";
import {
  ON_VOLUNTEERING_ADD,
  ON_VOLUNTEERING_CHANGE,
} from "../../constants/formConstants";
import { CLOSE_MODAL } from "../../constants/uiConstants";
import { FormContext } from "../../contexts/FormContext";
import { UIContext } from "../../contexts/UIContext";
import Input from "../Input";
import ModalButtons from "../ModalButtons";
import { TextArea } from "../TextArea";
import "./VolunteeringInformation.css";
function VolunteeringInformation({ name }) {
  const { state, formDispatch } = useContext(FormContext);
  const { uiDispatch } = useContext(UIContext);
  const { title, dates, organization, description } = state.volunteering;
  const onSubmit = (e) => {
    e.preventDefault();
    if (state.volunteering.id === 0) {
      state.volunteering.id = Date.now();
    }
    formDispatch({ type: ON_VOLUNTEERING_ADD, payload: state.volunteering });
    uiDispatch({ type: CLOSE_MODAL });
  };
  const onChange = (e) => {
    const { name, value } = e.target;
    formDispatch({ type: ON_VOLUNTEERING_CHANGE, payload: { name, value } });
  };
  const inputs = [
    {
      name: "title",
      value: title,
      label: "Title",
      onChange,
      style: {
        width: "180px",
      },
    },
    {
      value: dates,
      name: "dates",
      label: "Dates",
      onChange,
      style: {
        width: "180px",
      },
    },
    {
      name: "organization",
      label: "Organizations",
      value: organization,
      onChange,
      style: {
        width: "380px",
      },
    },
  ];
  const textAreaProps = {
    name: "description",
    label: "Description",
    onChange,
    value: description,
  };
  return (
    <div className="vol__info">
      <h2>{name}</h2>
      <form onSubmit={onSubmit}>
        {inputs.map((input) => (
          <Input {...input} key={input.name} />
        ))}
        <TextArea {...textAreaProps} />
        <ModalButtons />
      </form>
    </div>
  );
}

export default VolunteeringInformation;

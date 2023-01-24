import { useReducer } from "react";
import { createContext } from "react";
import { formInitialState, formReducer } from "../reducers/formReducer";

export const FormContext = createContext();
export const FormContextProvider = ({children}) => {
  const [state, dispatch] = useReducer(formReducer, formInitialState);
  const value = { state, formDispatch: dispatch };
  return <FormContext.Provider value={value}>{children}</FormContext.Provider>;
};

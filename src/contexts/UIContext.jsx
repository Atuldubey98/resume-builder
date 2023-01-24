import { useReducer } from "react";
import { useRef } from "react";
import { createContext } from "react";
import { uiInitialState, uiReducer } from "../reducers/uiReducer";

export const UIContext = createContext();
export const UIContextProvider = ({ children }) => {
const [state, dispatch] = useReducer(uiReducer, uiInitialState);
  const printRef = useRef();
  const value = { state, uiDispatch: dispatch, printRef };
  return <UIContext.Provider value={value}>{children}</UIContext.Provider>;
};

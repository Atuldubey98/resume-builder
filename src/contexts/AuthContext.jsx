import { createContext, useEffect, useReducer } from "react";
import { authReducer, userInitialState } from "../reducers/authReducer";
import connectFirebase from "../firebaseAPI/connectFirebase";
import {
  USER_ERROR,
  USER_LOADED,
  USER_LOADING,
} from "../constants/authConstants";
export const AuthContext = createContext();
export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, userInitialState);
  const { auth } = connectFirebase;
  useEffect(() => {
    dispatch({ type: USER_LOADING });
    const unSubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch({ type: USER_LOADED, user });
      } else {
        dispatch({ type: USER_ERROR, payload: null });
      }
    });
    return () => {
      unSubscribe();
    };
  }, [dispatch]);
  return (
    <AuthContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

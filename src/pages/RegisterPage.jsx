import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./RegisterPage.css";

import { useEffect, useRef } from "react";
import { AuthContext } from "../contexts/AuthContext";
import {
  ON_FIELD_CHANGE,
  USER_ERROR,
  USER_LOADING,
} from "../constants/authConstants";
import UserService from "../firebaseAPI/UserService";
import Loading from "../components/Loading";
import Button from "../components/Button";
import {
  loginLinkProps,
  registerButtonProps,
} from "../constants/propConstants";
import { ButtonWithIcon } from "../components/ButtonWithIcon";

const RegisterPage = () => {
  const { state, dispatch: userDispatch } = useContext(AuthContext);
  const navigate = useNavigate();
  const onRegisterSubmit = async (e) => {
    e.preventDefault();
    userDispatch({ type: USER_LOADING });
    try {
      await UserService.register(state.email, state.password);
      navigate("/designer", { replace: true });
    } catch (error) {
      userDispatch({ type: USER_ERROR, payload: `Error occured !` });
      setTimeout(() => {
        userDispatch({ type: USER_ERROR, payload: `` });
      }, 2000);
    }
  };
  const onInputChange = (e) => {
    const { name, value } = e.target;
    userDispatch({ type: ON_FIELD_CHANGE, payload: { name, value } });
  };
  const emailRef = useRef();
  useEffect(() => {
    emailRef.current.focus();
  }, []);
  return (
    <div className="register__page">
      <form onSubmit={onRegisterSubmit}>
        <div className="input__control">
          <label htmlFor="email">
            Email :<span className="required__control">*</span>
          </label>
          <input
            ref={emailRef}
            type="email"
            autoComplete="off"
            placeholder="Email"
            name="email"
            required
            onChange={onInputChange}
            value={state.email}
          />
        </div>
        <div className="input__control">
          <label htmlFor="name">
            Password : <span className="required__control">*</span>
          </label>
          <input
            type="password"
            required
            placeholder="Password"
            name="password"
            onChange={onInputChange}
            value={state.password}
          />
        </div>
        <div>
          {state.error && (
            <div className="error__message">
              <h4>{state.error}</h4>
            </div>
          )}
          <span
            style={{
              color: "green",
            }}
          >
            {state.message}
          </span>
        </div>
        <div className="input__buttons">
          {state.loading ? <Loading /> : <Button {...registerButtonProps} />}
          <ButtonWithIcon {...loginLinkProps} />
        </div>
      </form>
    </div>
  );
};

export default RegisterPage;

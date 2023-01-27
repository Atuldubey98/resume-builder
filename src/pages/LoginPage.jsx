import React, { useContext, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import { ButtonWithIcon } from "../components/ButtonWithIcon";
import Loading from "../components/Loading";
import { USER_ERROR, USER_LOADING } from "../constants/authConstants";
import { loginButtonProps, registerLinkProps } from "../constants/propConstants";
import { AuthContext } from "../contexts/AuthContext";
import UserService from "../firebaseAPI/UserService";
import "./LoginPage.css";
export const LoginPage = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { state, dispatch: userDispatch } = useContext(AuthContext);
  const { loading: userLoading, error } = state;
  const navigate = useNavigate();
  const onLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      userDispatch({ type: USER_LOADING });
      await UserService.login(
        emailRef.current.value,
        passwordRef.current.value
      );
      navigate("/designer", { replace: true });
    } catch (error) {
      userDispatch({ type: USER_ERROR, payload: `Some error occured !` });
      setTimeout(() => {
        userDispatch({ type: USER_ERROR, payload: `` });
      }, 2000);
    }
  };
  useEffect(() => {
    emailRef.current.focus();
  }, []);

  return (
    <div className="login__page">
      <form autoComplete="off" onSubmit={onLoginSubmit} spellCheck="false">
        <div className="input__control">
          <label htmlFor="email">
            Email :<span className="required__control">*</span>
          </label>
          <input
            name="email"
            ref={emailRef}
            type="email"
            placeholder="Enter email"
            required
          />
        </div>
        <div className="input__control">
          <label htmlFor="password">
            Password : <span className="required__control">*</span>
          </label>
          <input
            ref={passwordRef}
            type="password"
            name="password"
            placeholder="Enter password"
            required
          />
        </div>
        {userLoading ? (
          <Loading />
        ) : (
          <div className="input__buttons">
            <Button {...loginButtonProps} />
            <ButtonWithIcon {...registerLinkProps} />
          </div>
        )}
        {error && (
          <div className="error__message">
            <h4>{error}</h4>
          </div>
        )}
      </form>
    </div>
  );
};

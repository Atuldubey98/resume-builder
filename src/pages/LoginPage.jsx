import React, { useContext, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import Loading from "../components/Loading";
import { USER_ERROR, USER_LOADING } from "../constants/authConstants";
import { AuthContext } from "../contexts/AuthContext";
import UserService from "../firebaseAPI/UserService";
import "./LoginPage.css";
export const LoginPage = () => {
  console.log("Login Re rendering");
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
            <button type="submit">Login</button>
            <Link to={"/register"}>Register instead ?</Link>
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

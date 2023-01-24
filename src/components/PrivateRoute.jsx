import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

const PrivateRoute = ({ children }) => {
  const { state } = useContext(AuthContext);
  if (state.user) {
    return <Navigate to={"/login"} replace />;
  }
  return children;
};

export default PrivateRoute;

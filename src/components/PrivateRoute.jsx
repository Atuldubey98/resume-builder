import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

const PrivateRoute = ({ children }) => {
  const { state } = useContext(AuthContext);
  const { user } = state;
  if (user) {
    return children;
  }
  return <Navigate to={"/login"} replace />;
};

export default PrivateRoute;

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "./contexts/AuthContext";
import { UIContextProvider } from "./contexts/UIContext";
import { FormContextProvider } from "./contexts/FormContext";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <FormContextProvider>
          <UIContextProvider>
            <App />
          </UIContextProvider>
        </FormContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);

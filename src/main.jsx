import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./splitPane.services";
import "./index.css";
import SignUpDialog from "./welcomeDialog.services";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SignUpDialog />
    <App />
  </React.StrictMode>
);

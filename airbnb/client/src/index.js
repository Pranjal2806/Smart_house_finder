import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import SaveProvider from "./context/SaveContext";
import CompareProvider from "./context/CompareContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <SaveProvider>
    <CompareProvider>
      <App />
    </CompareProvider>
  </SaveProvider>
);
import React from "react";
import ReactDOM from "react-dom/client";
//Import AOS
import AOS from "aos";
AOS.init();

import "./styles/style.css";
import App from "./app";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

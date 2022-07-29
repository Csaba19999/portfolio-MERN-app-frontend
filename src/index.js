import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";
import Overlay from "./shared/overlay/Overlay";

import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.Fragment>
    <Router>
      <Overlay>
        <App />
      </Overlay>
    </Router>
  </React.Fragment>
);

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { Provider } from "react-redux";
import { store } from "./store/store";

import App from "./App";
import Overlay from "./shared/overlay/Overlay";

import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.Fragment>
    <Provider store={store}>
      <GoogleOAuthProvider clientId="970561369762-kh90p077kfmk56rsr7uug1bra3kcj8g2.apps.googleusercontent.com">
        <Router>
          <Overlay>
            <App />
          </Overlay>
        </Router>
      </GoogleOAuthProvider>
    </Provider>
  </React.Fragment>
);

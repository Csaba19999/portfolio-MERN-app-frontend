import React, { useLayoutEffect } from "react";
import { Route, Switch, Redirect, useLocation } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

import Welcome from "./pages/welcome/Welcome";
import Contact from "./pages/contact/Contact";
import References from "./pages/references/References";
import NotFound from "./pages/404/NotFound";
import CodeSnippet from "./pages/codeSnippet/CodeSnippet";
import CodeSnippetView from "./pages/CodeSnippetView/CodeSnippetView";
import { useDispatch } from "react-redux";
import { authCheck } from "./store/auth/auth-slice";

import "./App.css";

function App() {
  const dispatch = useDispatch();

  const refreshAccessToken = async () => {
    if (localStorage.getItem("refresh_token") !== null) {
      const responseData = fetch(
        process.env.REACT_APP_BACKEND_AUTH_API_KEY + "/google/refresh_token",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            refresh_token: localStorage.getItem("refresh_token"),
          }),
        }
      );
      const data = await (await responseData).json();
      console.log("data", data);
      dispatch(authCheck(data));
    }
  };

  useEffect(() => {
    refreshAccessToken();
  });

  const location = useLocation();
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <Switch>
      <Route path="/" exact>
        <Welcome />
      </Route>
      <Route path="/contact" exact>
        <Contact />
      </Route>
      <Route path="/references" exact>
        <References />
      </Route>
      <Route path="/codeSnippet" exact>
        <CodeSnippet />
      </Route>
      <Route path="/codeSnippet/:id" exact>
        <CodeSnippetView />
      </Route>
      <Route path="/notFound" exact>
        <NotFound />
      </Route>
      <Redirect to="/notFound" />
    </Switch>
  );
}

export default App;

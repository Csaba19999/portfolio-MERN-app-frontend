import React, { useLayoutEffect, Suspense } from "react";
import { Route, Switch, Redirect, useLocation } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

import { useDispatch } from "react-redux";
import { authCheck } from "./store/auth/auth-slice";
import LoadingSpinner from "./shared/loadingSpinner/LoadingSpinner";
import "./App.css";
import Privacy from "./pages/Privacy/Privacy";
import Admin from "./pages/admin/Admin";

const Welcome = React.lazy(() => import("./pages/welcome/Welcome"));
const Contact = React.lazy(() => import("./pages/contact/Contact"));
const References = React.lazy(() => import("./pages/references/References"));
const NotFound = React.lazy(() => import("./pages/404/NotFound"));
const CodeSnippet = React.lazy(() => import("./pages/codeSnippet/CodeSnippet"));
const CodeSnippetView = React.lazy(() =>
  import("./pages/CodeSnippetView/CodeSnippetView")
);

function App() {
  const dispatch = useDispatch();

  /*if (window.location.href.includes("https://portfolio-mern-app-frontend-static.vercel.app")) {
    window.location.href = "https://mcsaba.dev";
  }*/

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
    <Suspense
      fallback={
        <div className={`center redirect`}>
          <LoadingSpinner />
        </div>
      }
    >
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
        <Route path="/privacy" exact>
          <Privacy />
        </Route>
        <Route path="/mcsadmin" exact>
          <Admin />
        </Route>
        <Redirect to="/notFound" />
      </Switch>
    </Suspense>
  );
}

export default App;

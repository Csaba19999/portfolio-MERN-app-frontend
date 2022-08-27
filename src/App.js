import React, { useLayoutEffect } from "react";
import { Route, Switch, Redirect, useLocation } from "react-router-dom";

import Welcome from "./pages/welcome/Welcome";
import Contact from "./pages/contact/Contact";
import References from "./pages/references/References";
import NotFound from "./pages/404/NotFound";
import CodeSnippet from "./pages/codeSnippet/CodeSnippet";
import CodeSnippetView from "./pages/CodeSnippetView/CodeSnippetView";
import "./App.css";


function App() {
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

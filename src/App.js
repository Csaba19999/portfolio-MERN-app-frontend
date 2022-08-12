import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Welcome from "./pages/welcome/Welcome";
import Contact from "./pages/contact/Contact";
import References from "./pages/references/References";
import NotFound from "./pages/404/NotFound";

import "./App.css";


function App() {
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
        <Route path="/notFound" exact>
          <NotFound />
        </Route>
        <Redirect to="/notFound" />
      </Switch>
  );
}

export default App;

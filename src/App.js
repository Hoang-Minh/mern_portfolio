import React, { Fragment } from "react";
import { Route } from "react-router-dom";
import { CssBaseline } from "@material-ui/core";
import Home from "./components/Home";
import "./App.css";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";

function App() {
  return (
    <Fragment>
      <CssBaseline></CssBaseline>
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/resume" component={Resume}></Route>
      <Route exact path="/portfolio" component={Portfolio}></Route>
    </Fragment>
  );
}

export default App;

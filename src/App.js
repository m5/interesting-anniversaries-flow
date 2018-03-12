// @flow

import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Home from "./Home";
import About from "./About";
import Anniversaries from "./Anniversaries";

import "./App.css";

const App = () => (
  <Router>
    <div>
      <h1>Interesting Anniversaries</h1>
      <ul>
        <Route exact path="/">
          {({ match }) =>
            match ? null : (
              <li>
                <Link to="/">Home</Link>
              </li>
            )
          }
        </Route>

        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>

      <hr />

      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/:dateString" component={Anniversaries} />
    </div>
  </Router>
);

export default App;

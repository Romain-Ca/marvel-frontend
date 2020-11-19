import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

// Import containers
import Home from "./containers/Home";

// Import components
// import Header from "./components/Header"
// import Footer from "./components/Footer"

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/comics">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

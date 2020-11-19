import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

// Import containers
import Comics from "./containers/Comics";
import Characters from "./containers/Characters";
import CharacterId from "./containers/CharacterId";
import ComicId from "./containers/ComicId";

// Import components
import Header from "./components/Header";
import Footer from "./components/Footer";

const apiUrl = "http://localhost:3100/";

function App() {
  return (
    <div className="main">
      <Router>
        <Header />
        <Switch>
          <Route path="/character/:id">
            <Comics apiUrl={apiUrl} />
          </Route>
          <Route path="/comics/:id">
            <Comics apiUrl={apiUrl} />
          </Route>
          <Route path="/comics">
            <Comics apiUrl={apiUrl} />
          </Route>
          <Route path="/">
            <Characters apiUrl={apiUrl} />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

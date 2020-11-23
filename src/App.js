import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

// Import containers
import Comics from "./containers/Comics";
import Characters from "./containers/Characters";
import CharacterId from "./containers/CharacterId";
import ComicId from "./containers/ComicId";
import Favorites from "./containers/Favorites";

// Import components
import Header from "./components/Header";
import Footer from "./components/Footer";
// Import fontawesome
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faAngleRight,
  faAngleLeft,
  faBolt,
} from "@fortawesome/free-solid-svg-icons";
library.add(faAngleRight, faAngleLeft, faBolt);

// const apiUrl = "http://localhost:3100/";
const apiUrl = "https://marvel-backend-reacteur.herokuapp.com";

function App() {
  return (
    <div className="main">
      <Router>
        <Header />
        <Switch>
          <Route path="/favorites">
            <Favorites apiUrl={apiUrl} />
          </Route>
          <Route path="/character/:id">
            <CharacterId apiUrl={apiUrl} />
          </Route>
          <Route path="/comics/:id">
            <ComicId apiUrl={apiUrl} />
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

// Check test test

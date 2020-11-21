import React from "react";
import "./index.css";
import { Link } from "react-router-dom";
import Logo2 from "../../images/Emblème-Marvel.jpg";

const Header = () => {
  return (
    <section className="header">
      <div className="header-top">
        <div className="logo-container">
          <Link to="/">
            <img className="logo" src={Logo2} alt="logo-marvel" />
          </Link>
        </div>
        <nav className="navigation-container">
          <ul className="navigation">
            <Link to="/">
              <li>CHARACTERS</li>
            </Link>
            <Link to="/comics">
              <li>COMICS</li>
            </Link>
            <Link to="/">
              <li>FAVORITE</li>
            </Link>
          </ul>
        </nav>
        <div className="login-container">
          <button className="login-button">LOGIN</button>
        </div>
      </div>
    </section>
  );
};

export default Header;

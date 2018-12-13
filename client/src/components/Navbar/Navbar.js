import React from "react";
// import { Link } from "react-router-dom";
import "./Navbar.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const Navbar = props => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div clasName="row">
  <div clasName="col-md-6"></div>
    <div className="navbar-brand" to="/">
      Pupster
    </div>
    <div>
      <ul className="navbar-nav">
        <li className="nav-item">
          <div
            to="/"
            className={
              window.location.pathname === "/" || window.location.pathname === "/about"
                ? "nav-link active"
                : "nav-link"
            }
          >
            About
          </div>
        </li>
        <li className="nav-item">
          <div
            to="/discover"
            className={
              window.location.pathname === "/discover"
                ? "nav-link active"
                : "nav-link"
            }
          >
            Discover
          </div>
        </li>
        <li className="nav-item">
          <div
            to="/search"
            className={
              window.location.pathname === "/search"
                ? "nav-link active"
                : "nav-link"
            }
          >
            Search
          </div>
        
      <div clasName="col-md-3">
      <label for="username">Username:</label>
      <input type="username" autocomplete="on" id="username" name="username" placeholder="Username"></input>
      </div>
      <div clasName="col-md-3">
      <label for="password">Password:</label>
      <input type="password" autocomplete="on" id="password" name="password" placeholder="Password"></input>
       </div>
      </li>
      </ul>
    </div>
    </div>
  </nav>
);

export default Navbar;

import React from "react";
// import { Link } from "react-router-dom";
import "./Navbar.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const Navbar = props => (
  <nav>
  <div className="row">
  <div className="col-md-2"></div>
  <div className="col-md-2"><h1>receipt me</h1></div>
  <div className="col-md-3"></div>       
      <div className="col-md-2">
      <label for="username" className="navlogin">Username:</label>
      <input type="username" autocomplete="on" id="username" name="username" placeholder="Username"></input>
      </div>
      <div className="col-md-2">
      <label for="password" className="navlogin">Password:</label>
      <input type="password" autocomplete="on" id="password" name="password" placeholder="Password"></input>
       </div>
      <div className="col-md-1">
      <button id="loginbtn" type="submit">Login</button>
      </div>
    </div>
  </nav>
);

export default Navbar;

 /* <div className="navbar-brand" to="/">
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
          // </div> */

          /* </li>
      </ul> */
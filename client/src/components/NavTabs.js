import React from "react";

const NavTabs = props => (
  <ul className="nav nav-tabs">
    <li className="nav-item">
      <a
        onClick={() => props.handlePageChange("Login")}
        className={
          props.currentPage === "Login" ? "nav-link active" : "nav-link"
        }
      >
        Login
      </a>
    </li>
    <li className="nav-item">
      <a
        onClick={() => props.handlePageChange("Create")}
        className={
          props.currentPage === "Create" ? "nav-link active" : "nav-link"
        }
      >
        Create
      </a>
    </li>
    <li className="nav-item">
      <a
        onClick={() => props.handlePageChange("Main")}
        className={
          props.currentPage === "Main" ? "nav-link active" : "nav-link"
        }
      >
        Main
      </a>
    </li>
  </ul>
);

export default NavTabs;

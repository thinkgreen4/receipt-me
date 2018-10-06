import React, { Component } from "react";
import NavTabs from "./NavTabs";
import Create from "../pages/Create";
import Login from "../pages/Login";
import Main from "../pages/Main";

class Portfolio extends Component {
  state = {
    currentPage: "Login"
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  renderPage = () => {
    if (this.state.currentPage === "Login") {
      return <Login />;
    } else if (this.state.currentPage === "Create") {
      return <Create />;
    } else if (this.state.currentPage === "Main") {
      return <Main />;
    } 
  };

  render() {
    return (
      <div>
        <NavTabs
          currentPage={this.state.currentPage}
          handlePageChange={this.handlePageChange}
        />
        {this.renderPage()}
      </div>
    );
  }
}

export default Portfolio;

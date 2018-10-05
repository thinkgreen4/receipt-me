import React from "react";
// import { Link } from "react-router-dom";
import "./Signup.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const Signup = () => (
  //   <div>
  //   <h1>Please Work</h1>
  // </div>
  // <div className="signup">
  <form action="/submit" method="post">
    <div className="form-row">
      <div className="form-group col-md-12">
        <label htmlFor="inputCity">First Name</label>
        <input type="text" name="firstname" className="form-control" id="firstName" placeholder="First Name"></input>
      </div>
    </div>
    <div className="form-row">
      <div className="form-group col-md-12">
        <label htmlFor="inputCity">Last Name</label>
        <input type="text" name="lastname" className="form-control" id="lastName" placeholder="Last Name"></input>
      </div>
    </div>
    <div className="form-row">
      <div className="form-group col-md-12">
        <label htmlFor="inputCity">Username</label>
        <input type="text" name="username" className="form-control" id="username" placeholder="Username"></input>
      </div>
    </div>
    <div className="form-row">
      <div className="form-group col-md-12">
        <label htmlFor="inputEmail4">Email</label>
        <input type="email" name="email" className="form-control" id="inputEmail4" placeholder="Email"></input>
      </div>
    </div>
    <div className="form-row">
      <div className="form-group col-md-12">
        <label htmlFor="inputPassword4">Password</label>
        <input type="password" name="password" className="form-control" id="inputPassword4" placeholder="Password"></input>
      </div>
    </div>
    <div className="form-group">
      <div className="form-check">
        <input className="form-check-input" type="checkbox" id="gridCheck"></input>
        <label className="form-check-label" htmlFor="gridCheck">Remember Me
      </label>
      </div>
    </div>
    <button type="submit" className="btn btn-primary submit-btn">Create User</button>
   <input type="submit"></input>
</form>
);

export default Signup;

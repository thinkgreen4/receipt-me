import React from "react";
// import { Link } from "react-router-dom";
import "./Signup.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const Signup = () => (
  //   <div>
  //   <h1>Please Work</h1>
  // </div>
  <div class="signup">
          <div class="form-row">
            <div class="form-group col-md-12">
              <label for="inputCity">Username</label>
              <input type="text" class="form-control" id="inputCity" placeholder="Username"></input>
            </div>
          </div>
            <div class="form-row">
            <div class="form-group col-md-12">
              <label for="inputEmail4">Email</label>
              <input type="email" class="form-control" id="inputEmail4" placeholder="Email"></input>
            </div>
            </div>
            <div class="form-row">
            <div class="form-group col-md-12">
              <label for="inputPassword4">Password</label>
              <input type="password" class="form-control" id="inputPassword4" placeholder="Password"></input>
            </div>
            </div>
          <div class="form-group">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" id="gridCheck"></input>
              <label class="form-check-label" for="gridCheck">Remember Me
      </label>
            </div>
          </div>
          <button type="submit" class="btn btn-primary submit-btn">Login</button>
          </div>
);

export default Signup;

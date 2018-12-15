import React from "react";
// import { Link } from "react-router-dom";
import "./NewUser.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const NewUser = () => (
  //   <div>
  //   <h1>Please Work</h1>
  // </div>
  <section>
    <div className="row">
      <div className="col-lg-2"></div>

      <div className="col-lg-8">
        <div className="about">




          <div className="row">
            <div className="col-lg-4"></div>
            <div className="col-lg-4">
              <h1 id="aboutReceiptMe">sign up form</h1>

            </div>
            <div className="col-lg-4"></div>
          </div>

          <div className="row">
            <div className="col-lg-2"></div>
            <div className="col-lg-8">
              <form className="formFields" onSubmit={this.handleSubmit}>
                <div className="formField">
                  <label className="formFieldLabel" htmlFor="username">Username:</label>
                  <input className="formFieldInput" type="text" autocomplete="on" id="username" name="username" placeholder="Enter your username"></input>
                </div>
                <div className="formField">
                  <label className="formFieldLabel" htmlFor="email">E-mail Address:</label>
                  <input className="formFieldInput" type="email" autocomplete="on" id="email" name="email" placeholder="Enter your email"></input>
                </div>
                <div className="formField">
                  <label className="formFieldLabel" htmlFor="password">Password:</label>
                  <input className="formFieldInput" type="password" autocomplete="on" id="password" name="password" placeholder="Enter your password"></input>
                </div>

                <div id="pswMessage">
                  <h3>Test your password</h3>
                  <p id="lengthCounter">Number of Characters:</p>
                  <p id="pswLength" className="invalid">Minimum 8 Characters in Length</p>
                  <p id="upper" className="invalid">Uppercase Letters</p>
                  <p id="lower" className="invalid">Lowercase Letters</p>
                  <p id="number" className="invalid">Numbers</p>
                  <p id="symbol" className="invalid">Symbols</p>
                </div>

                <div className="formField">
                  <button id="createAccountBtn" type="submit">Create Account</button>
                </div>
              </form>

            </div>
            <div className="col-lg-2"></div>
          </div>


          <div className="row">
            <div className="col-lg-3"></div>
            <div className="col-lg-6">
              <h3 id="signUpText">sign up for a free account</h3>
            </div>
            <div className="col-lg-3">

            </div>
          </div>

          {/* <div className="row">
          <div className="col-lg-4"></div>
          <div className="col-lg-4" id="centerBlock">
          <button id="createAccountBtn" type="submit">Create Account</button>
          </div>
          <div className="col-lg-4">
          </div>
          </div> */}




        </div>
      </div>
      <div className="col-lg-2"></div>
    </div>
    <script>
    </script>
  </section>
);

export default NewUser;

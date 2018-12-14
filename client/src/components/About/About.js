import React from "react";
// import { Link } from "react-router-dom";
import "./About.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const About = () => (
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
          <h1 id="aboutReceiptMe">receipt me</h1>
                
          </div>
          <div className="col-lg-4"></div>
          </div>
          
          <div className="row">
          <div className="col-lg-2"></div>
          <div className="col-lg-8">
          <p id="aboutText">Reciept me is an application that will store all of your receipts in one place.
          You can take pictures of your reciepts and they will automatically be read and stored in an appropriate
          category so that you can easily locate them when you need to.
          </p>
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

          <div className="row">
          <div className="col-lg-4"></div>
          <div className="col-lg-4" id="centerBlock">
          <button id="createAccountBtn" type="submit">Create Account</button>
          </div>
          <div className="col-lg-4">
          </div>
          </div>



          
        </div>
      </div>
      <div className="col-lg-2"></div>
    </div>
  </section>
);

export default About;

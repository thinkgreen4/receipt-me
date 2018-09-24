import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Signup from './components/Signup';
// import '../public/index.html'
import {default} from ',/components/Camera';
class App extends Component {
  render() {
    return (
    <div class="wrapper">
      <div class="row main-row">
        <div class="col-md-4 left-side">
          <div class="left-side-bg">
            <div id="form-title"><h1>reciept me</h1></div>
          </div>
        </div>
        <div class="col-md-8">
          <form>
          <div class="row">
          <div class="col-md-6"></div>
          <div class="col-md-6">
          <div class="btn-group btn-group-toggle" data-toggle="buttons">
        <button type="submit" toggle="active" class="btn btn-primary sign-btn">Sign in</button>
        <button type="submit" class="btn btn-primary user-btn">Create User</button>
        </div>
          </div>
          <Signup></Signup>
        </div>
      </form>
    </div>
    </div>
    </div>
    );
  }
}

export default App;

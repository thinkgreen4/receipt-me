import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Signup from './components/Signup';
// import '../public/index.html'
import Camera from './components/CameraCapture';
import Receipt from './components/Receipt';
import ImgRecognition from './components/Tesseract';
import Tesseract from 'tesseract.js';
import PortfolioContainer from "./components/PortfolioContainer";




// class App extends Component {
//   state = {
//     openCameraState: false
//   }

//   ProcessOCR = (myImage) => {
//     Tesseract.recognize(myImage)
//  .then(function(result){
//      console.log(result)
//  });
// }

//   openCamera = (event) => {
//     event.preventDefault()
//     this.setState({
//       openCameraState: true
//     });
//   }
//   closeCamera = (event) => {
//     event.preventDefault()
//     this.setState({
//       openCameraState: false
//     });
//   }



  const App = () => (
    <div className="wrapper">
      <div className="row main-row">
        <div className="col-md-4 left-side">
          <div className="left-side-bg">
            <div id="form-title"><h1>reciept me</h1></div>
          </div>
        </div>
        <div className="col-md-8">
          <div>
          <div className="row">
          <div className="col-md-6"></div>
          <div className="col-md-6">
          <div className="btn-group btn-group-toggle" data-toggle="buttons">
        {/* <button type="submit" toggle="active" className="btn btn-primary sign-btn">Sign in</button>
        <button type="submit" className="btn btn-primary user-btn">Create User</button> */}
        </div>
          </div>
          <PortfolioContainer />
        </div>
      </div>
    </div>
        {/* <div>
        <button onClick={this.openCamera}>Take Photo</button>
        <button onClick={this.closeCamera}>Close</button>
        <button onClick={this.processOCR}>Scan</button>
          {this.state.openCameraState && <Camera processOCR={this.ProcessOCR}/>}
        </div> */}
    </div>
    {/* <div className="row">
    <div className="col-md-3"></div>
    <div className="col-md-6">
    <Receipt></Receipt>
    </div>
    <div className="col-md-3"></div>
    </div> */}
    </div>
    );
  
// }

export default App;

import React, { Component } from 'react';
import Camera, { FACING_MODES, IMAGE_TYPES } from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';
import API from '../../utils/api.js';
 
class CameraCapture extends Component {
  onTakePhoto (dataUri) {
    // Do stuff with the photo...
    console.log('takePhoto');
    console.log(dataUri);
    API.saveReceipt({img: dataUri}).then((res) => {
      console.log(res);
    })

  }
 
  onCameraError (error) {
    console.error('onCameraError', error);
  }
 
  onCameraStart (stream) {
    console.log('onCameraStart');
  }
 
  onCameraStop () {
    console.log('onCameraStop');
  }
 
  render () {
    return (
      <div className="Camera">
        <Camera
          onTakePhoto = { (dataUri) => { this.onTakePhoto(dataUri); } }
          onCameraError = { (error) => { this.onCameraError(error); } }
          idealFacingMode = {FACING_MODES.ENVIRONMENT}
          idealResolution = {{width: 640, height: 480}}
          imageType = {IMAGE_TYPES.JPG}
          imageCompression = {0.50}
          isMaxResolution = {false}
          isImageMirror = {false}
          isDisplayStartCameraError = {true}
          sizeFactor = {1}
          onCameraStart = { (stream) => { this.onCameraStart(stream); } }
          onCameraStop = { () => { this.onCameraStop(); } }
        />
      </div>
    );
  }
}
 
export default CameraCapture;

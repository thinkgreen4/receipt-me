import React, { Component } from 'react';
import Tesseract from 'tesseract.js';
import API from '../../utils/api.js';
import { scryptSync } from 'crypto';


class ImgRecognition extends Component {
    state = {
    }
   ProcessOCR = (myImage) => {
       Tesseract.recognize(myImage)
    .then(function(result) {
        console.log(result)
    });
}
render() {
    return (
        <div>
        </div>
    );
  }
}

export default ImgRecognition;

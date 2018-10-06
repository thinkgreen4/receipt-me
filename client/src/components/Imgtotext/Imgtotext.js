import React, { Component } from 'react';
// import Tesseract from 'tesseract.js';
import API from '../../utils/api.js';
import { scryptSync } from 'crypto';
const imageToTextDecoder = require('image-to-text');

//the image is in the database,
//grab that image from the database,
//run it through the scrape,
//take the product and store it in the database,
//take the product and the images from the database,
//put them in a component,
//show them on the front

class Imgtotext extends Component {

    getReceipts(){
    console.log('getReceipt');
    }
    // state = {};

//  API.saveReceipt({img: dataUri}).then((res) => {
//     console.log("this is image" + res);

// var file = {
//     name: 'iphone.jpeg',
//     path: './image/'
//   };
//  var key = 'ztEX9VMpdh3YbmiGfvlLDA'; //Your key registered from cloudsightapi @ https://cloudsightapi.com
//  imageToTextDecoder.setAuth(key);
//  imageToTextDecoder.getKeywordsForImage(file).then(function(keywords){
//     console.log(keywords);
//  },function(error){
//     console.log(error);
 };

export default Imgtotext;

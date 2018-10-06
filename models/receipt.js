// Require mongoose
const mongoose = require("mongoose");
const express = require('express');
const fs = require('fs');
const axios = require('axios');



// Create a schema class using mongoose's schema method
const Schema = mongoose.Schema;

const ReceiptSchema = new Schema ({
    img: { data: Buffer, type: String } 
  
});

const Receipt = mongoose.model('Receipt', ReceiptSchema);

module.exports = Receipt;

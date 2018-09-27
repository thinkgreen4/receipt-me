// Require mongoose
const mongoose = require("mongoose");

// Create a schema class using mongoose's schema method
const Schema = mongoose.Schema;

const ReceiptSchema = new Schema ({
    img: String
  
});

const Receipt = mongoose.model('Receipt', ReceiptSchema);

module.exports = Receipt;

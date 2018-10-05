import React from "react";
// import { Link } from "react-router-dom";
import "./Receipt.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const Receipt = () => (
<div class="row">
 <div class="receipt-container">
 <div class="col-md-3">
 <h1 id="merchant">Merchant Title</h1>
 </div>
 <div class="col-md-3">
 </div>
 <div class="col-md-3">
 {/* <img src="" */}
 </div>
 <div class="col-md-3">
 <h3 id="timeStamp">Current Date</h3>
 </div>
 </div>
 </div>
  
);

export default Receipt;

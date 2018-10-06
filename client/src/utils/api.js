 import axios from "axios";

export default {
  // Gets all receipts
  getReceipts: function() {
    return axios.get("/api/receipt");
  },
  // Gets the receipts with the given id or we could change to date
  getReceipt: function(id) {
    return axios.get("/api/receipt/" + id);
  },
  // Deletes the receipts with the given id or we could change to date although could de diffucult if more than one on a date
  deleteReceipt: function(id) {
    return axios.delete("/api/receipt/" + id);
  },
  // Saves a receipt to the database
  saveReceipt: function(receiptData) {
    console.log(receiptData);
    return axios.post("/api/receipt/", receiptData);
  }
};
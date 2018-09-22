const router = require("express").Router();
const receiptRoutes = require("./receipt");

// receipt routes
router.use("/receipt", receiptRoutes);

module.exports = router;
//just copied code from example in week 20 need to change it up
const router = require("express").Router();
const receiptsController = require("../../controllers/receiptsController");

// Matches with "/api/receipt"
router.route("/")
  .get(receiptsController.findAll)
  .post(receiptsController.create);

//  Matches with "/api/receipts/:id"
 router
   .route("/:id")
   .get(receiptsController.findById)
   .put(receiptsController.update)
   .delete(receiptsController.remove);

module.exports = router;
const router = require("express").Router();
//const db = require('../../models/drink')
const whiskeyController = require("../../controllers/whiskeyController.js");

// Matches with "/api/whiskey"
router.route("/")
  .get(whiskeyController.findAll)
  .post(whiskeyController.create);

// Matches with "/api/whiskey/:id"
router
  .route("/:id")
  .get(whiskeyController.findById)
  .put(whiskeyController.update)
  .delete(whiskeyController.remove);

module.exports = router;

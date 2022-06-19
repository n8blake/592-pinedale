const router = require("express").Router();
//const db = require('../../models/drink')
const drinksController = require("../../controllers/drinksController.js");

// Matches with "/api/drinks"
router.route("/")
  .get(drinksController.findAll)
  .post(drinksController.create);

// Matches with "/api/drinks/:id"
router
  .route("/:id")
  .get(drinksController.findById)
  .put(drinksController.update)
  .delete(drinksController.remove);

module.exports = router;

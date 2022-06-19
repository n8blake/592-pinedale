const router = require("express").Router();
//const db = require('../../models/drink')
const cocktailsController = require("../../controllers/cocktailsController.js");

// Matches with "/api/cocktails"
router.route("/")
  .get(cocktailsController.findAll)
  .post(cocktailsController.create);

// Matches with "/api/cocktails/:id"
router
  .route("/:id")
  .get(cocktailsController.findById)
  .put(cocktailsController.update)
  .delete(cocktailsController.remove);

module.exports = router;

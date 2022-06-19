const router = require("express").Router();
//const db = require('../../models/drink')
const beerController = require("../../controllers/beerController.js");

// Matches with "/api/beer"
router.route("/")
  .get(beerController.findAll)
  .post(beerController.create);

// Matches with "/api/beer/:id"
router
  .route("/:id")
  .get(beerController.findById)
  .put(beerController.update)
  .delete(beerController.remove);

module.exports = router;

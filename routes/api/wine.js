const router = require("express").Router();
//const db = require('../../models/drink')
const wineController = require("../../controllers/wineController.js");

// Matches with "/api/wine"
router.route("/")
  .get(wineController.findAll)
  .post(wineController.create);

// Matches with "/api/wine/:id"
router
  .route("/:id")
  .get(wineController.findById)
  .put(wineController.update)
  .delete(wineController.remove);

module.exports = router;

const router = require("express").Router();
const drinkRoutes = require("./drinks");
const wineRoutes = require('./wine')
const whiskeyRoutes = require('./whiskey')
const cocktailRoutes = require('./cocktails')
const beerRoutes = require('./beer')

// Drink routes
router.use("/drinks", drinkRoutes);
router.use("/beer", beerRoutes);
router.use("/cocktails", cocktailRoutes);
router.use("/wine", wineRoutes);
router.use("/whiskey", whiskeyRoutes);

module.exports = router;
const express = require("express");
const router = express.Router();
const propertyController = require("../controllers/propertyController")

router.get("/presale", propertyController.getAllPropertiesPreSale);

router.get("/forsale", propertyController.getAllPropertiesForSale);

router.get("/sold", propertyController.getAllPropertiesSold);

module.exports = router;
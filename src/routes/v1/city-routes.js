const express = require("express");
const router = express.Router();
const CityController = require("../../controllers/city-controller");

//refering to /api/v1/city POST
router.post("/",CityController.createCity);

module.exports = router;
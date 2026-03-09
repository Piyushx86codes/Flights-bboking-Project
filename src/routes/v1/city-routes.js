const express = require("express");
const router = express.Router();
const CityController = require("../../controllers/city-controller");
const CityMiddlewares = require("../../middlewares/city-middlewares");

//refering to /api/v1/city POST
router.post("/",CityMiddlewares.validateCreateRequest,CityController.createCity);

module.exports = router;
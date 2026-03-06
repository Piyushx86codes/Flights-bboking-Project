const express = require("express");
const router = express.Router();
const AirplaneController = require("../../controllers/airplane-controller");
const {AirplaneMiddlewares} = require("../../middlewares");

//refering to /api/v1/airplanes POST
router.post("/",AirplaneMiddlewares.validateCreateRequest,AirplaneController.createAirplane);
module.exports = router;
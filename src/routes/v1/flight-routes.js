const express = require("express");
const router = express.Router();
const FlightController = require("../../controllers/flight-controller");
const {FlightMiddlewares} = require("../../middlewares");

//refering to /api/v1/airplanes POST
router.post("/",FlightMiddlewares.validateCreateRequest,FlightController.createFlight);
router.get("/",FlightController.getAllFlights);
module.exports = router;
const express = require("express");
const router = express.Router();
const AirportController = require("../../controllers/airport-controller");
const {AirportMiddlewares} = require("../../middlewares");

//refering to /api/v1/airplanes POST
router.post("/",AirportMiddlewares.validateCreateRequest,AirportController.createAirport);
router.get("/",AirportController.getAirports);
router.get("/:id",AirportController.getAirport);
router.delete("/:id",AirportController.destroyAirport);
module.exports = router;
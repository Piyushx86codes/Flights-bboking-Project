const express = require('express');
const router = express.Router();
const {infoController} = require("../../controllers");
const AirplaneRoutes = require("./airplane-routes");
const CityRoutes = require("./city-routes");
const AirportRoutes = require("./airport-routes");
const FlightRoutes = require("./flight-routes");


router.get('/info',infoController.info);
router.use("/airplanes",AirplaneRoutes);
router.use("/city",CityRoutes);
router.use("/airports",AirportRoutes);
router.use("/flights",FlightRoutes);

module.exports = router;
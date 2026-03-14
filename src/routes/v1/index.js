const express = require('express');
const router = express.Router();
const {infoController} = require("../../controllers");
const AirplaneRoutes = require("./airplane-routes");
const CityRoutes = require("./city-routes");
const AirportRoutes = require("./airport-routes");


router.get('/info',infoController.info);
router.use("/airplanes",AirplaneRoutes);
router.use("/city",CityRoutes);
router.use("/airports",AirportRoutes);

module.exports = router;
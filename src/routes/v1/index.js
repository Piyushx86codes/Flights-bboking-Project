const express = require('express');
const router = express.Router();
const {infoController} = require("../../controllers");
const AirplaneRoutes = require("./airplane-routes");


router.get('/info',infoController.info);
router.use("/airplanes",AirplaneRoutes);

module.exports = router;
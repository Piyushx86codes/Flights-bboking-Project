const express = require('express');
const app = express();
const {ServerConfig} = require("./config");
const apiRoutes = require("./routes");
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/api',apiRoutes);

app.listen(ServerConfig.PORT,async()=>{
    console.log(`App is Active and listening on Port No: ${ServerConfig.PORT}`);
    //bad code alert//
    // const {City,Airport} = require("./models");
    // const city = await City.findByPk(1);
})
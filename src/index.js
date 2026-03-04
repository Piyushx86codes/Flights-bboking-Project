const express = require('express');
const app = express();
const {ServerConfig} = require("./config");
const apiRoutes = require("./routes");


app.use('/api',apiRoutes);

app.listen(ServerConfig.PORT,()=>{
    console.log(`App is Active and listening on Port No: ${ServerConfig.PORT}`);
})
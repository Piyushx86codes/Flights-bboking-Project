const express = require('express');
const app = express();
const {PORT} = require("./config");

app.listen(PORT,()=>{
    console.log(`App is Active and listening on Port No: ${PORT}`);
})
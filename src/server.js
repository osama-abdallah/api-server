'use strict';

const cors = require('cors');
const express = require('express');
const logger =require('./middleware/logger');

const foodsRoute =require('./routes/food.js');
const clothesRoute =require('./routes/clothes.js');
const errorHandle500 =require("./error-handlers/500");
const errorHandle404 =require("./error-handlers/404");

const app = express();

app.use(express.json());
app.use(cors()); 
app.use(logger);
app.use(foodsRoute);
app.use(clothesRoute);


app.get('/' ,(req,res)=>{
    res.send("Home Page");
});


app.use(errorHandle500);
app.use("*",errorHandle404);



function start(port) {
app.listen(port, () => {
    console.log(`Server online through port ${port}`);
})    
}



module.exports ={
    app :app,
    start :start
}
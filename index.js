// console.log("hello");

// import express from 'express'?

//pw - RVhkC9EcaV5mo6Qe
// const express = require('express');


const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/product_model');
require('dotenv').config();
const productRoute = require('./routes/product.route');
const app = express();




//middlewear
app.use(express.json());


//env
const mongoUrl = process.env.MONGO_DB_URL; 



//routs
app.use("/api/products", productRoute);




// app.get('/', (req, res) => {
//     res.send("product-app");
// });




mongoose.connect(mongoUrl).then(() => {
    console.log("Database Connected!");
    app.listen(3000, () => {
        console.log("App is running on server - http://localhost:3000");

    });

}).catch((err) => {
    console.error("Database not connected, Error - ", err);

});




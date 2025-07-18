// console.log("hello");

// import express from 'express'?


// const express = require('express');


const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/product_model');
const productRoutes= require('./routes/product.route');
const port = 3000;
require('dotenv').config();


const app = express();



//middlewear
app.use(express.json());


//env
const mongoUrl = process.env.MONGO_DB_URL; 


//routs
app.use('/api/products', productRoutes);




app.get('/', (req, res) => {
    res.send("products-app");
});


//CREATE
// app.post('/api/products', async (req, res) => {

//     // console.log(req.body.name);
//     // res.send(req.body.name);

//     try {
//        const products = await Product.create(req.body);
//        res.status(200).json(products);
//     } catch (error) {
//         res.status(500).json({message: error.message});
//     }
    
// });









mongoose.connect(mongoUrl).then(() => {
    console.log("Database Connected!");
    app.listen(port, () => {
        console.log("App is running on server - http://localhost:3000");

    });

}).catch((err) => {
    console.error("Database not connected, Error - ", err);

});




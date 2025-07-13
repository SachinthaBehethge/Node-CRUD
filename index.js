// console.log("hello");

// import express from 'express'?

//pw - RVhkC9EcaV5mo6Qe
// const express = require('express');


const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/product_model');
const app = express();

app.use(express.json());



app.get('/', (req, res) => {
    res.send("Product app");
});


//CREATE
app.post('/api/products', async (req, res) => {

    // console.log(req.body.name);
    // res.send(req.body.name);

    try {
       const products = await Product.create(req.body);
       res.status(200).json(products);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
    
});

//READ
app.get('/api/products', async (req, res)=>{
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({message:error.message});
    }
});




//GETONE

app.get('/api/product/:id', async (req,res)=>{
    try {
        const {id} = req.params;

        const product = await Product.findById(id);
        if (!product) {
            res.status(404).json({message:"Product not found"});
        }

        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({message:error.message});
    }
});



// update a product


app.put('/api/product/:id', async (req, res)=>{
    try {
        const {id} = req.params;

        const product = await Product.findByIdAndUpdate(id, req.body);

        if (!product) {
           return res.status(404).json({message:"Product not found"});
        }

        const updatedProduct = await Product.findById(id);

        res.status(200).json(updatedProduct);


    } catch (error) {
        res.status(500).json({message:error.message});
    }
});

//delete a product

app.delete('/api/product/:id', async (req,res) =>{
    try {
        const {id} = req.params;
        const prodcut = await Product.findByIdAndDelete(id);

        if (!prodcut) {
          return  res.status(404).json({message:"Prodcut not found"});
        }

        res.status(200).json({message:"Product Deleted Successfully!"});



    } catch (error) {
        res.status(500).json({message:error.message});
    }
});

//findone

app.get('/api/product', async (req, res) => {
    try {
        
    } catch (error) {
        res.status(500).json({message:error.message});
    }
});



mongoose.connect('mongodb+srv://edikemadasa:RVhkC9EcaV5mo6Qe@backenddb.7r8ykkt.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BAckendDB').then(() => {
    console.log("Database Connected!");
    app.listen(3000, () => {
        console.log("App is running on server - http://localhost:3000");

    });

}).catch((err) => {
    console.error("Database not connected, Error - ", err);

});




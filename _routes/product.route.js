const express = require('express');
const Product = require('../models/product_model');

const { getProducts, createProduct, getProduct, updateProduct, deleteProduct, findProduct, findAndUpdateProduct } = require('../controllers/product.controller');

const router = express.Router();

//get Products
router.get('/', getProducts);

//create product
router.post('/', createProduct);


//GETONE

router.get('/:id', getProduct);



// update a product


router.put('/:id', updateProduct);

//delete a product

router.delete('/:id', deleteProduct);

//findone

router.get('/', findProduct);

//find one and update
router.put('/', findAndUpdateProduct);



module.exports = router;



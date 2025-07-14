const express = require('express');
const { getProducts, createProduct, getProduct, updateProduct, deleteProduct, findProduct, findAndUpdateProduct } = require('../controller/product.controller');
const router = express.Router();


//READ
router.get('/', getProducts);


//CREATE
router.post('/',createProduct);


//GETONE

router.get('/:id',getProduct );



// update a product


router.put('/:id', updateProduct);

//delete a product

router.delete('/:id', deleteProduct);

//findone

router.get('/', findProduct);

//find one and update
router.put('/', findAndUpdateProduct);



module.exports = router;

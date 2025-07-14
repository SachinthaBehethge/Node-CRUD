const Product = require("../models/product_model");

const getProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


const createProduct = async (req, res) => {


    try {
        const products = await Product.create(req.body);
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }

}


const getProduct = async (req, res) => {
    try {
        const { id } = req.params;

        const product = await Product.findById(id);
        if (!product) {
            res.status(404).json({ message: "Product not found" });
        }

        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


const updateProduct = async (req, res) => {
    try {
        const { id } = req.params;

        const product = await Product.findByIdAndUpdate(id, req.body);

        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }

        const updatedProduct = await Product.findById(id);

        res.status(200).json(updatedProduct);


    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const prodcut = await Product.findByIdAndDelete(id);

        if (!prodcut) {
            return res.status(404).json({ message: "Prodcut not found" });
        }

        res.status(200).json({ message: "Product Deleted Successfully!" });



    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const findProduct = async (req, res) => {
    try {
        const product = await Product.findOne({ name: req.query.name });

        if (!product) {
            res.status(404).json({ message: "Product not found" });
        }

        res.status(200).json(product);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


const findAndUpdateProduct = async (req, res) => {
    try {
        const product = await Product.findOneAndUpdate({ name: req.query.name }, req.body, { new: true, lean: true });

        if (!product) {
            res.status(404).json({ message: "Product not found" });
        }

        // const updatedProduct = await Product.findOne({name:req.query.name}); by pass this with new:true and lean :true

        res.status(200).json(product);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = {
    getProducts,
    createProduct, 
    getProduct, 
    updateProduct, 
    deleteProduct, 
    findProduct, 
    findAndUpdateProduct
};
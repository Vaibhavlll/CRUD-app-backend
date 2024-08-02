// An Express Router is a mini Express application that can have its own routing and middleware, separate from the main application.

const express = require("express");
const Product = require("../models/product.model")
const router = express.Router(); // create new router instance
const {getProduct, getProducts} = require("../ProductController/product.get");
const {post} =  require("../ProductController/product.push");
const {update} = require("../ProductController/product.update");
const deleteProduct = require("../ProductController/product.remove");


router.get('/',getProducts);
router.get('/:id',getProduct)
router.post('/',post);
router.put('/:id',update);
router.delete('/:id',deleteProduct);

module.exports = router;


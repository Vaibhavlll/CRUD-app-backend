const Product = require("../models/product.model");

const deleteProduct = ( async(req,res)=>{
    try{
        const { id }=req.params;
        const rm = await Product.findByIdAndDelete(id);
        res.status(200).json(rm);

        if(!rm){
            res.status(404).json({message:"product not found"})
        }

    } catch (error){
        res.status(500).json({message:error.message})
    }
  });

  module.exports = deleteProduct;
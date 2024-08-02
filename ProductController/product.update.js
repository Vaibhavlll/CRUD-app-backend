const Product = require("../models/product.model");

const update =( async (req,res)=>{
    try{
        const { id } = req.params;
        const product = await Product.findByIdAndUpdate(id,req.body);
        if(!product){
            return res.status(404).json({message:"product not found"});
        }
        const updated = await Product.findById(id);
        res.status(200).json(updated);
    } catch (error){
        res.status(500).json({message:error.message});
    }
});

module.exports = {
    update
};
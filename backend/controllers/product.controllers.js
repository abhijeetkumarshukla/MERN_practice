const ProductModel = require("../models/product.model");

const productADD = async(req,res)=>{
    const {title,price,description,brand} = req.body;
    
    try {
        const product = new ProductModel({
            title,
            price,
            description,
            brand
        })
        await product.save();
        res.status(200).json({message:`product added done`,product})
    } catch (error) {
        res.status(400).json({message:error})
    }
}
 
module.exports = productADD;
   
 

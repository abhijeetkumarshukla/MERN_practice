const ProductModel = require("../models/product.model")

const productGet = async(req,res)=>{
    try {
        const product = await ProductModel.find()
       return res.status(200).json({message:` getting all product`,product})
    } catch (error) {
        res.status(400).json(error)
    }
}

module.exports = productGet;
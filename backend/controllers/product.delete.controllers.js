const ProductModel = require("../models/product.model");

const productDelete = async (req,res)=>{
    const id = req.params.id;
    try {
        const gyabeta = await ProductModel.findByIdAndDelete({_id:id})
        return res.status(201).json({message:`product deleted`,gyabeta})
    } catch (error) {
        res.status(401).json(error)
    }
}

module.exports = productDelete;
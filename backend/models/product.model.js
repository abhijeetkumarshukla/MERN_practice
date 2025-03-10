const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    title:{type:String, required:true},
    price:{type:String, required:true},
    description:{type:String, required:true},
    brand:{type:String, required:true}
},{
    versionKey:false
})

const ProductModel = mongoose.model('Product',productSchema);

module.exports = ProductModel;
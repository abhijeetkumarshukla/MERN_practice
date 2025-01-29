const express = require('express');
const productADD = require('../controllers/product.controllers');
const productGet = require('../controllers/product.get.controllers');
const productDelete = require('../controllers/product.delete.controllers');
 
const productRouter = express.Router();

productRouter.post('/add',productADD )
productRouter.get('/',productGet)
productRouter.delete('/delete/:id', productDelete)

module.exports = productRouter


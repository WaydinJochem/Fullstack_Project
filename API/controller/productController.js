const express = require('express');
const routes = express.Router();
const bodyParser = require('body-parser');
const Products = require('../model/products');
const products = new Products();

//get methods
routes.get('/products',(req, res)=>{
    products.fetchProducts(req, res)
});
routes.get('products/:id', (req, res)=>{
    products.fetchProduct(req, res)
});

//post methods
routes.post('/products',bodyParser.json(), (req, res)=>{
    products.addProduct(req, res)
});
//put methods
routes.put('/products/:id', bodyParser.json(), (req, res)=>{
    products.updateProduct(req, res)
});

//patch methods
routes.patch('/products/:id', bodyParser.json(),(req, res)=>{
    products.updateProduct(req, res)
});
//delete methods
routes.delete('/products/:id', (req, res)=>{
    products.deleteProduct(req, res)
});

module.exports = {
    express, routes
}
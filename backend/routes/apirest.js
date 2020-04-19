var express = require('express');
var router = express.Router();
const Producto = require('../model/Productos')

router.post('/newproduct', async function(req,res){
    const producto = JSON.parse(JSON.stringify(req.body));
    const newProducto = new Producto(producto);
    await newProducto.save();
    res.render(newProducto);
});

module.exports = router;
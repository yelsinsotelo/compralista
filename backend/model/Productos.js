const mongoose = require('mongoose');
const { Schema } = mongoose;
const productoschema = new Schema({
    tienda : {type : String, require: true},
    nombre : {type : String, require: true},
    precio : {type: String , require: true},
    imgurl : {type: String, require: true}
});

module.exports = mongoose.model('Productos',productoschema);
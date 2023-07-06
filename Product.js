const mongoose = require('mongoose');
const ProductSchema= new mongoose.Schema({
    name:String,
    Surname:String,
    Age:String,
    Gender:String
},{ collection: 'Product' });

 module.exports = mongoose.model('Product', ProductSchema);
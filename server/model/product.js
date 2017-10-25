var mongoose = require('mongoose');


var productSchema = new mongoose.Schema({                        
    name: {type: String},
    typ: {type: String},
    quant: {type:String},
    
});


var Product = mongoose.model('prod', productSchema);
module.exports = Product;
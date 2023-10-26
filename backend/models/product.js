const mongoose = require("mongoose");
const productSchema = mongoose.Schema({


    
        brand:{type:String},
        description:{type:String},
        id: {type:String},
        image:{type:String},
        name: {type: String},
        noOfSales:{type:String},
        price: {type: String},
        quantity:{type:String},
});

module.exports = mongoose.model("Product", productSchema);
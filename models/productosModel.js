const mongoose = require("../bin/mongodb");

const productosSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"El campo name es obligatorio"],
        minlength:1,
        maxlength:100
    },
    sku:{
        type:String,
        required:[true,"El campo sku es obligatorio"],
        unique:true
    },
    description:String,
    price:{
        type:Number,
        min:1
    },
    quantity:{
        type:Number,
        min:1
    },
    category:{
        type:mongoose.Schema.ObjectId,
        ref:"categories"
    }
})

module.exports = mongoose.model("products", productosSchema)
const mongoose = require("../bin/mongodb");

const categoriesSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"El campo name es obligatorio"],
        minlength:1,
        maxlength:100
    },
    description:String
})

module.exports = mongoose.model("categories", categoriesSchema)
const productosModel = require("../models/productosModel");

module.exports = {
  getAll: async (req, res, next) => {
    try{
        const productos = await productosModel.find({}).limit(4);
        res.json(productos);
    }catch (e){
        next(e)
    }
  }}
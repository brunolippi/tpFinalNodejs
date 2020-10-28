const productosModel = require("../models/productosModel");
const categoriesModel = require("../models/categoriesModel");

module.exports = {
  getAll: async (req, res, next) => {
    try{
        const productos = await productosModel.find({}).populate("category");
        res.json(productos);
    }catch (e){
        next(e)
    }
  },
  getById: async (req, res, next) => {
    console.log(req.params.id);
    try {
        const productos = await productosModel.findById(req.params.id);
        res.json(productos);
    }catch (e){
        next(e)
    }
  },
  create: async (req, res, next) => {
    console.log(req.body);
    try{
        const producto = new productosModel({
            name: req.body.name,
            sku: req.body.sku,
            description: req.body.description,
            price: req.body.price,
            quantity: req.body.quantity,
            category: req.body.category
          });
          let prod = await producto.save();
          res.json(prod);
    }catch (e){
        next(e)
    }
    
  },
  update: async (req, res, next) => {
    try{
        let producto = await productosModel.update({ _id: req.params.id }, req.body, { multi: false })
        res.json(producto);
    }catch (e){
       next(e) 
    }
  },
  delete: async (req, res, next) => {
    try{
        let producto = await productosModel.deleteOne({ _id: req.params.id })
        res.json(producto);
    }catch (e){
       next(e) 
    }
  }
};

const categoriesModel = require("../models/categoriesModel");

module.exports = {
  getAll: async (req, res, next) => {
    try{
        const categorias = await categoriesModel.find({});
        res.json(categorias);
    }catch (e){
        next(e)
    }
  },
  getById: async (req, res, next) => {
    console.log(req.params.id);
    try {
        const categorias = await categoriesModel.findById(req.params.id);
        res.json(categorias);
    }catch (e){
        next(e)
    }
  },
  create: async (req, res, next) => {
    console.log(req.body);
    try{
        const categorias = new categoriesModel({
            name: req.body.name,
            description: req.body.description
          });
          let prod = await categorias.save();
          res.json(prod);
    }catch (e){
        next(e)
    }
    
  },
  update: async (req, res, next) => {
    try{
        let categorias = await categoriesModel.update({ _id: req.params.id }, req.body, { multi: false })
        res.json(categorias);
    }catch (e){
       next(e) 
    }
  },
  delete: async (req, res, next) => {
    try{
        let categorias = await categoriesModel.deleteOne({ _id: req.params.id })
        res.json(categorias);
    }catch (e){
       next(e) 
    }
  }
};

var express = require('express');
var router = express.Router();
const categoriesController = require('../controllers/categoriesController')

/* GET users listing. */
router.get('/', categoriesController.getAll);
router.get('/:id', categoriesController.getById);
router.post('/', (req,res,next) => {req.app.validateUser(req,res,next)}, categoriesController.create);
router.put('/:id', categoriesController.update);
router.delete('/:id', categoriesController.delete);

module.exports = router;

var express = require('express');
var router = express.Router();
const usersController = require('../controllers/usersController')

/* GET users listing. */
router.get('/', usersController.getAll);
router.get('/:id', usersController.getById);
router.post('/registro', usersController.create);
router.post('/login', usersController.login);
router.put('/:id', usersController.update);
router.delete('/:id', usersController.delete);

module.exports = router;

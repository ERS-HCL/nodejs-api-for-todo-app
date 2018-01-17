const express = require('express');
const Router = express.Router();
const todoController = require('../controllers/todo.controller');

Router.get('/', todoController.find);
Router.post('/', todoController.create);
Router.delete('/:id', todoController.delete);
Router.put('/:id', todoController.updateAll);
Router.patch('/:id', todoController.update);

module.exports = Router;
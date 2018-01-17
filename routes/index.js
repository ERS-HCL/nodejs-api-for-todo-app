const express = require('express');
const Router = express.Router();
const todoRoutes = require('./todo.route');
Router.use('/todos', todoRoutes)
module.exports = Router;
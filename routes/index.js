const express = require('express');
const Router = express.Router();
const companyRoutes = require('./company.route');
const todoRoutes = require('./todo.route');
Router.use('/companies', companyRoutes)
Router.use('/todos', todoRoutes)
module.exports = Router;
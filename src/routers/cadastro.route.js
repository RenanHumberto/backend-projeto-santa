const express = require('express');
const route = express.Router();
const cadastroController = require('../controllers/cadastro.controller');

route.post("/", cadastroController.create);

module.exports = route;
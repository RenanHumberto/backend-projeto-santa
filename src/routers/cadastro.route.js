const express = require('express');
const route = express.Router();
const cadastroController = require('../controllers/cadastro.controller');
const {validId, validCadastro} = require('../middlewares/global.middlewares');

route.post("/", cadastroController.create);
route.get("/", cadastroController.findAll);
route.get("/:id",validId,validCadastro, cadastroController.findById);
route.patch("/:id",validId,validCadastro, cadastroController.update)

module.exports = route;
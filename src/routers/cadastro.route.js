import express from 'express';
const route = express.Router();

import cadastroController from '../controllers/cadastro.controller.js';
import {validId, validCadastro} from '../middlewares/global.middlewares.js';

route.post("/", cadastroController.create);
route.get("/", cadastroController.findAll);
route.get("/:id",validId,validCadastro, cadastroController.findById);
route.patch("/:id",validId,validCadastro, cadastroController.update)

export default route;
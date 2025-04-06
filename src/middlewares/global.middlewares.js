import mongoose from "mongoose";
import cadastroService from "../services/cadastro.service.js";

export const validId = (req, res, next) =>{
    const id = req.params.id;
    
    if (!mongoose.Types.ObjectId.isValid(id)) { //verifica se o id é valido
        return res.status(400).send({ message: "Id inválido" });
    };

    next();
}

 export const validCadastro = async(req, res, next) =>{
    const id = req.params.id;

    const cadastro = await cadastroService.findByIdService(id);

    if (!cadastro) {
        return res.status(400).send({ message: "Erro ao encontrar cadastro 😔" });
    };

    req.id = id;
    req.cadastro = cadastro;

    next();
}

export default  {validId, validCadastro}
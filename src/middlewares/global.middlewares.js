const mongoose = require('mongoose');
const cadastroService = require("../services/cadastro.service");

const validId = (req, res, next) =>{
    const id = req.params.id;
    
    if (!mongoose.Types.ObjectId.isValid(id)) { //verifica se o id é valido
        return res.status(400).send({ message: "Id inválido" });
    };

    next();
}

const validCadastro = async(req, res, next) =>{
    const id = req.params.id;

    const cadastro = await cadastroService.findByIdService(id);

    if (!cadastro) {
        return res.status(400).send({ message: "Erro ao encontrar cadastro 😔" });
    };

    next();
}

module.exports = {validId, validCadastro}
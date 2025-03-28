const Cadastro = require('../models/cadastro.Model');
//o find, create, findbyid são metodos do moongose
const createService = (body) => Cadastro.create(body);
//recebe os daodos do body e envia eles
const findAllService = () => Cadastro.find();
const findByIdService = (id) => Cadastro.findById(id);
const updateService = (id, updateObject) => Cadastro.findOneAndUpdate(
    {_id: id},
    updateObject,
    {new: true});

module.exports = {
    createService,
    findAllService,
    findByIdService,
    updateService
};
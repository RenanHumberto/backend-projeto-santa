const Cadastro = require('../models/cadastro.Model');

const create = (body) => Cadastro.create(body);

module.exports = {
    create,
};
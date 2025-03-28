const { default: mongoose } = require("mongoose");
const cadastroService = require("../services/cadastro.service");
/* const moongose = require("mongoose"); */ //pode retirar essa importação

const create = async (req, res) => {
    const { name, email, password } = req.body;
    //uma condição, para verificar se eu tenho esses campos
    if (!name || !email || !password) {
        res.status(400).send({ message: "Preencha todos os campos" });
    }

    const cadastro = await cadastroService.createService(req.body);

    if (!cadastro) {
        return res.status(400).send({ message: "Erro ao cadastrar" });
    }

    res.status(201).send({
        message: "Cadastro realizado com sucesso",
        cadastro: {
            id: cadastro._id,
            name,
            email
            //aq eu poderia colocar a senha, mas n quero ficar mostrando
        },
    });
};

const findAll = async (req, res) => {
    const cadastro = await cadastroService.findAllService(); //esse findall é do service, e não o do controller

    if (cadastro.length === 0) {
        return res.status(404).send({ message: "Nenhum cadastro encontrado 😔" });
    }

    res.status(201).send(cadastro);
};

const findById = async (req, res) => {
    const id = req.params.id

    // if (!mongoose.Types.ObjectId.isValid(id)) { //verifica se o id é valido
    //     return res.status(400).send({ message: "Id inválido" });
    // };

    const cadastro = await cadastroService.findByIdService(id);

    // if (!cadastro) {
    //     return res.status(400).send({ message: "Erro ao encontrar cadastro 😔" });
    // };

    res.status(201).send(cadastro);
};

const update = async (req, res) => {

    const { name, email, password } = req.body;
    //uma condição, para verificar se eu tenho esses campos
    if (!name && !email && !password) {
        res.status(400).send({ message: "Preencha algum  dos campos" });
    }

    const id = req.params.id

    /* if (!mongoose.Types.ObjectId.isValid(id)) { //verifica se o id é valido
        return res.status(400).send({ message: "Id inválido" });
    }; */

    /* const cadastro = await cadastroService.findByIdService(id); */

   /*  if (!cadastro) {
        return res.status(400).send({ message: "Erro ao encontrar cadastro 😔" });
    }; */

    const updateFields = {};
    if (name) updateFields.name = name;
    if (email) updateFields.email = email;
    if (password) updateFields.password = password;

    await cadastroService.updateService(id, updateFields);

    res.send({message: "Cadastro atualizado com sucesso!!!"})
}

module.exports = { create, findAll, findById, update };


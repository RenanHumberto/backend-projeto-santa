import cadastroService from "../services/cadastro.service.js";
/* const moongose = require("mongoose"); */ //pode retirar essa importação

const create = async (req, res) => {
    try {
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
    } catch (error) {
        res.status(500).send({ message: err.message });
    }
};

const findAll = async (req, res) => {
    try {
        const cadastro = await cadastroService.findAllService();
        if (cadastro.length === 0) {
            return res.status(404).send({ message: "Nenhum cadastro encontrado 😔" });
        }
        res.status(200).send(cadastro);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

const findById = async (req, res) => {
    try {
        const id = req.id

        const cadastro = req.cadastro;

        res.status(201).send(cadastro)
    }
    catch (error) {
        res.status(500).send({ message: error.message })
    }
};

const update = async (req, res) => {

    try {
        const { name, email, password } = req.body;
        //uma condição, para verificar se eu tenho esses campos
        if (!name && !email && !password) {
            res.status(400).send({ message: "Preencha algum  dos campos" });
        }

        const id = req.params.id;

        const updateFields = {};
        if (name) updateFields.name = name;
        if (email) updateFields.email = email;
        if (password) updateFields.password = password;

        await cadastroService.updateService(id, updateFields);

        res.send({ message: "Cadastro atualizado com sucesso!!!" })
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}

export default { create, findAll, findById, update };

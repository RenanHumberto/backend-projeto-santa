const cadastroService = require("../services/cadastro.service");

const create = async(req, res) => {
    const {name, email, password} = req.body;
    //uma condição, para verificar se eu tenho esses campos
    if(!name || !email || !password){
        res.status(400).send({message: "Preencha todos os campos"});
    }
  
    const cadastro = await cadastroService.create(req.body);

    if(!cadastro){
        return res.status(400).send({message: "Erro ao cadastrar"});
    }

    res.status(201).send({
        message: "Cadastro realizado com sucesso",
        cadastro:{
            id: cadastro._id,
            name,
            email
            //aq eu poderia colocar a senha, mas n quero ficar mostrando
        },
    });
};

module.exports = {create};


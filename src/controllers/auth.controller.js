import bcrypt from "bcrypt";
import {loginService} from "../services/auth.service.js"


const login = async (req, res) => {
    const { email, password } = req.body;

    try{
        const cadastro = await loginService(email);

    if(!cadastro){
        return res.status(404).send({message: "Login ou senha inválidos"})
    }

    const passwordIsValid = bcrypt.compareSync(password, cadastro.password)

   
    if (!passwordIsValid){
        return res.status(401).send({message: "Login ou senha inválidos"})

    }

        res.status(201).send("Login realizado com sucesso!")
    } catch (error) {
        res.status(500).send({ message: error.message });
    }   
};

export {login} 
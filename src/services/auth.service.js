import Cadastro from "../models/cadastro.Model.js";

const loginService = (email) => Cadastro.findOne({email: email}).select("+password");
// aqui eu estou pegando o email, e retornando o cadastro que tem esse email
export { loginService };
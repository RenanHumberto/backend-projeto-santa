import mongoose from "mongoose";
import bcrypt from "bcrypt"

//nova "tabela" 
const CadastroSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        select: false
    }
});

CadastroSchema.pre("save", async function (next){
    this.password = await bcrypt.hashSync(this.password, 10);
    next();
}) //crypotagrafando a senha, antes de salvar no banco de dados

const Cadastro = mongoose.model("Cadastro", CadastroSchema);
export default  Cadastro; 















// const conexao = require('../database/conexao.js');
// class CadastroModel {
//     lista(){
//         return
//     }

// }

// module.exports = new CadastroModel();
// // O comando module.exports = new CadastroModel(); é usado no Node.js para exportar um módulo,
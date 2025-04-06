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
})

const Cadastro = mongoose.model("Cadastro", CadastroSchema);
export default  Cadastro; //para que possamos utilizar em outras partes do codigo, pastas etc

// 1️⃣ Importamos o Mongoose.
// 2️⃣ Criamos um Schema (CadastroSchema) que define a estrutura dos dados.
// 3️⃣ Definimos os campos nome, email e senha com regras de validação.
// 4️⃣ Criamos um modelo (Cadastro) baseado nesse Schema.
// 5️⃣ Exportamos o modelo para utilizá-lo em outras partes da aplicação.

// Agora, podemos usar esse modelo para criar, ler, atualizar e deletar (CRUD) usuários no MongoDB!




// tabela antiga que eu tinha feito
// const User = mongoose.model('User', {
//     nome: String,
//     email: String,
//     senha: String
// });
















// const conexao = require('../database/conexao.js');
// class CadastroModel {
//     lista(){
//         return
//     }

// }

// module.exports = new CadastroModel();
// // O comando module.exports = new CadastroModel(); é usado no Node.js para exportar um módulo,
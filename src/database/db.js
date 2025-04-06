import mongoose from "mongoose";

const connectDatabase = () => {
    console.log("Espere a conexão com o banco de dados, por favor...");

    mongoose
        .connect(
            "mongodb+srv://renanhumberto:5vSJTTFozXm0w86L@cluster0.iiuib.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
        .then(() => console.log("✅ MongoDB Atlas Conectado!"))
        .catch((error) => console.error("❌ Erro ao conectar ao MongoDB:", error));
};

export default connectDatabase;
// module.exports = connectDatabase;
//versão chatgpt

//5vSJTTFozXm0w86L


// const mongoose = require('mongoose');

// const connectDatabase = () => {
//     console.log("Espere a conexão com o banco de dados, por favor...")

//     mongoose
//         .connect(
//             "mongodb+srv://renanvitorino:RCxR2lSfUZN7ZgTm@clusterpericias.bq0ul.mongodb.net/?retryWrites=true&w=majority&appName=Clusterpericias",
//             //"mongodb+srv://renanvitorino:RCxR2lSfUZN7ZgTm@clusterpericias.bq0ul.mongodb.net/?retryWrites=true&w=majority&appName=Clusterpericias",
//             //{ useNewUrlParser: true, useUnifiedTopology: true }
//         )
//         .then(() => console.log("MongoDB Atlas Conectado"))//then é o que acontece se der certo
//         .catch((error) => console.log(error)) //cath é o que acontece se der errado, pra fazer esperar
// };

// module.exports = connectDatabase;





// //banco 03
// const mongoose = require('mongoose');
// require('dotenv').config(); // Carrega as variáveis do .env

// const dbUser = process.env.DB_USER;
// const dbPassword = process.env.DB_PASSWORD;

// const connect = async () => {
//     try {
//         await mongoose.connect(`mongodb+srv://${dbUser}:${dbPassword}@cluster0.iiuib.mongodb.net/socios?retryWrites=true&w=majority&appName=Cluster0`, {
//             useNewUrlParser: true,
//             useUnifiedTopology: true
//         });

//         console.log('🔥 Conectado ao MongoDB com sucesso!');
//     } catch (error) {
//         console.error('❌ Erro ao conectar com o MongoDB:', error);
//         process.exit(1); // Encerra o processo em caso de erro crítico
//     }
// };

// connect();

// module.exports = mongoose;














//===========================================================

// banco 02
// const mongoose = require('mongoose');

// const dbUser = process.env.DB_USER;
// const dbPassword = process.env.DB_PASSWORD;

// const connect = () => {
//     mongoose.connect(`mongodb+srv://${dbUser}:${dbPassword}@cluster0.iiuib.mongodb.net/socios?retryWrites=true&w=majority&appName=Cluster0`)

//     const connection = mongoose.connection;

//     connection.on('error',()=>{
//         console.error('Erro ao conectar com o mongoDB');
//     })

//     connection.once('open',()=>{
//         console.log('Conectado ao mongoDB com sucesso');
//     })
// }

// connect();

// module.exports = mongoose



// //banco 01
// const mongodb = require('mongodb').MongoClient; // Import mongodb colocando na variavel const
// const url = "mongodb+srv://renanhumberto:<5vSJTTFozXm0w86L>@cluster0.iiuib.mongodb.net/"; // URL de conexão com o banco de dados
// //mongodb+srv://renanhumberto:<5vSJTTFozXm0w86L>@cluster0.iiuib.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
// mongodb.connect(url, (erro,banco)=>{
//     if(erro)throw erro;
//     const dbo = banco.db("socios"); // Nome do banco de dados
//     const obj = {login:"Renan",senha:"1234"}; // Objeto a ser inserido (dado que va iser inserido na tabela)
//     const colecao = "usuarios"; // Nome da coleção
//     dbo.collection(colecao).insertOne(obj, (erro,resultado)=>{
//         if(erro)throw erro;
//         console.log("Documento inserido com sucesso");
//         banco.close();
//     })
// })
// //banco
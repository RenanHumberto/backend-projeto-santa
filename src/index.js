import express from 'express';
import cadastroRoute from './routers/cadastro.route.js';
import connectDatabase from './database/db.js';

const port = 3000;
const app = express();

connectDatabase();
app.use(express.json()); //adiciona suporte para JSON
app.use("/cadastro", cadastroRoute); //testando git pull 


app.listen(3000, () => console.log(`✅Servidor rodando na porta ${port}`));

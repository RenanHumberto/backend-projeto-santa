import express from 'express';
import connectDatabase from './database/db.js';
import dotenv from 'dotenv';

import cadastroRoute from './routers/cadastro.route.js';
import authRoute from './routers/auth.route.js';

dotenv.config(); //carrega as variaveis de ambiente do arquivo .env

const port = 3000;
const app = express();

connectDatabase();
app.use(express.json()); //adiciona suporte para JSON
app.use("/cadastro", cadastroRoute); //testando git pull 
app.use("/auth", authRoute);

app.listen(3000, () => console.log(`✅ Servidor rodando na porta ${port}`));

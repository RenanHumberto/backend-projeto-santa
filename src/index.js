const express = require('express');
const app = express();
const cadastroRoute = require('./routers/cadastro.route');
const connectDatabase = require('./database/db');
connectDatabase();

const port = 3000;


app.use(express.json()); //adiciona suporte para JSON
app.use("/cadastro", cadastroRoute);

app.listen(3000, () => console.log(`✅Servidor rodando na porta ${port}`));
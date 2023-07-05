const express = require('express');
const app = express();
const cors = require('cors');

require('dotenv-safe').config();

const db = require('./database/mongoConfig');
const exemploRoutes = require('./routes/exemploRoutes');
//puxa configuração do banco de dados e rotas

db.connect() ;
//conecta com o banco

app.use(cors());
app.use(express.json());
//inicia dependencias
app.use("/api", exemploRoutes);
//informa a rota raiz e aonde estão as rotas

module.exports = app;
//exporta app
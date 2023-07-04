const express = require('express');
const app = express();
const cors = require('cors');

require('dotenv-safe').config();

const db = require('./database/mongoConfig');
const exemploRoutes = require('./routes/exemploRoutes');

db.connect() ;

app.use(cors());
app.use(express.json());
app.use("/api", exemploRoutes);

module.exports = app;
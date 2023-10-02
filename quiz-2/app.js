const express = require('express');
// app conectar por el puerto local el express
// especificar los middleware a utilizar
const app = express();
const userRoutes = require("./routes/worker")
const API_VERSION = 'api/v1'

// Pruebas con extension rest client
app.use(express.json());
// Pruebas desde postman
app.use(express.urlencoded({extended: true}));

app.use(`/${API_VERSION}/worker`,userRoutes);

module.exports = app;

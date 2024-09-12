const express = require('express');
const connectDB = require('./config/db');
const port = 21900;
const app = express();

app.use(express.json());

const clienteRoutes = require('./routes/clienteRoutes.js');

// Conectar ao banco de dados
connectDB();

// Middleware
app.use(express.json());

// Rotas
app.use('/api/clientes', clienteRoutes);


app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});

const express = require('express');
const app = express();
const path = require('path');
const port = 3000; // Escolha a porta que deseja utilizar

// Configuração para servir arquivos estáticos na pasta 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Rota para servir a página index.html quando acessar a rota raiz '/'
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
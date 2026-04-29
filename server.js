const express = require("express");

const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
  res.send("<h1>Página Inicial</h1><p>Meu projeto Node.js está funcionando!</p>");
});

app.get("/sobre", (req, res) => {
  res.send("<h1>Sobre</h1><p>Esta é a página sobre.</p>");
});

app.get("/contato", (req, res) => {
  res.send("<h1>Contato</h1><p>Esta é a página de contato.</p>");
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
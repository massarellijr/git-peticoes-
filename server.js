const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3000;

// Configura o servidor para entregar os arquivos da pasta public
app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, '0.0.0.0', () => {
  console.log('Servidor rodando na porta ' + port);
});

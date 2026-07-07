const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3000;

// Serve os arquivos da pasta public
app.use(express.static(path.join(__dirname, 'public')));

// Garante que a rota principal abra o index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, '0.0.0.0', () => {
  console.log('Servidor rodando na porta ' + port);
});

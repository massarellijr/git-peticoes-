const express = require('express');
const app = express();
const path = require('path');

// Serve arquivos da pasta 'public'
app.use(express.static('public'));
// Substitua sua linha atual de app.listen por esta:
const port = process.env.PORT || 3000;

app.listen(port, '0.0.0.0', () => {
  console.log(`Servidor rodando na porta ${port}`);
});


});

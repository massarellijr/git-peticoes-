const express = require('express');
const app = express();
const path = require('path');

// Serve arquivos da pasta 'public'
app.use(express.static('public'));

app.listen(3000, '127.0.0.1', () => {
    console.log('Servidor rodando em http://127.0.0.1:3000');
});

const express = require('express');
const app = express()

app.get('/', (req, res) => {
    res.status(200).send('Ola Mundo')
})

app.listen(3000, () => {
    console.log('Servidor iniciado na porta 3000');
})
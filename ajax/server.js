const bodyParser = require('body-parser');
const express = require('express')
const app = express()

app.use(express.static('.')) // sirva os arquivo staticos 
app.use(bodyParser.urlencoded({ extended: true})) // a partir de um submit de formulário
app.use(bodyParser.json()) // 

app.get('/teste', (req, res) => res.send('Ok'))
app.listen(8080, () => console.log('Executando...'))

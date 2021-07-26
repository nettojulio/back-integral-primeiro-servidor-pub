const express = require('express');
const app = express();

app.get('/somar', (req, res) => {
    console.log(req.query);
    const primeiro = Number(req.query.num1);
    const segundo = Number(req.query.num2);
    res.send(String(primeiro + segundo));
})

app.get('/subtrair', (req, res) => {
    console.log(req.query);
    const primeiro = Number(req.query.num1);
    const segundo = Number(req.query.num2);
    res.send(String(primeiro - segundo));
})

app.get('/multiplicar', (req, res) => {
    console.log(req.query);
    const primeiro = Number(req.query.num1);
    const segundo = Number(req.query.num2);
    res.send(String(primeiro * segundo));
})

app.get('/dividir', (req, res) => {
    console.log(req.query);
    const primeiro = Number(req.query.num1);
    const segundo = Number(req.query.num2);
    res.send(String(primeiro / segundo));
})

app.listen(8000);
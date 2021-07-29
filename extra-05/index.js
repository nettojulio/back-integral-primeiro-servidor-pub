const jogadores = ["José", "Maria", "João", "Marcos", "Fernanda"];

const express = require('express');
const app = express();

let contador = 0;
let rodada = 1;

app.get('/', (req, res) => {

    if ((contador) < jogadores.length) {
        console.log(`Jogada atual: ${jogadores[contador]} (${contador + 1})\nRodada: ${rodada}`)
        res.send(`É a vez de ${jogadores[contador]}`)
        contador++;
    } else {
        rodada++;
        contador = 0;
        console.log(`Jogada atual: ${jogadores[contador]} (${contador + 1})\nRodada: ${rodada}`)
        res.send(`É a vez de ${jogadores[contador]}`)
        contador++;
    }
});

app.get('/remover', (req, res) => {
    console.log(`Solicitação de extração\nPosição: ${req.query.indice}`);

    if (req.query.indice < jogadores.length && req.query.indice >= 0) {
        console.log(`Solicitada remoção do jogador ${jogadores[req.query.indice]}`)
        jogadores.splice(req.query.indice, 1);
        res.send(`${jogadores}`);
    } else {
        res.status(404);
        res.send(`Não existe jogador no índice informado (${req.query.indice}) para ser removido.`)
    }
});


app.get('/adicionar', (req, res) => {
    const {nome, indice} = req.query;
    if (nome !== '' && !indice){
        console.log(`Solicitação de adição\nNome: ${nome}`);
        jogadores.push(nome);
        res.send(`${jogadores}`);
    } else if(nome !== '' && Number(indice) >= 0){
        console.log(req.query)
        if (Number(indice) < jogadores.length) {
            console.log(req.query)
            jogadores.splice(Number(indice), 0, nome);
            res.send(jogadores);
        } else {
            console.log(req.query)
            res.send(`O índice informado (${indice}) não existe no array. Novo jogador não adicionado.`);
        }
    } else {
        res.status(400);
        res.send('Verifique os dados!');
    }
});

app.listen(8000);
const jogadores = ["José", "Maria", "João", "Marcos", "Fernanda"];

const express = require('express');
const app = express();

let contador = 0;
const participantes = jogadores.length;
let rodada = 1;

app.get('/', (req, res) => {
    if ((contador) < participantes) {
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

app.listen(8000);
const express = require('express');

const app = express();

let cronometro = 0;
let minutos = 0;
let pausar = false;
let iniciar = true;

app.get('/', (req, res) => {
    console.log(`\nConsulta atual:\nMostrar Contagem!\nTempo atual do cronômetro: ${minutos.toString().padStart(2, "0")} minutos e ${cronometro.toString().padStart(2, "0")} segundos`)

    res.send(`Tempo atual do cronômetro: ${minutos.toString().padStart(2, "0")} minutos e ${cronometro.toString().padStart(2, "0")} segundos`)
});

app.get('/iniciar', (req, res) => {
    if (iniciar && !pausar) {
        iniciar = false
        console.log('\nSolicitação atual:\nIniciar Contagem!\n')
        inciarContagem();
        res.send('Cronômetro iniciado!')
    } else {
        console.log('\nSolicitação Redundante:\nIniciar Contagem com recurso ativo!\n')
        res.send('Cronômetro em curso!')
    }
});

app.get('/pausar', (req, res) => {
    if (iniciar && !pausar) {
        console.log('\nSolicitação Redundante:\nPausar Contagem com recurso inativo!\n')
        res.send('Cronômetro não foi iniciado! Solicitação Inválida!')
    } else if (pausar) {
        console.log('\nSolicitação Redundante:\nPausar Contagem com recurso já ativo!\n')
        res.send('Pausa já solicitada!')
    } else {
        console.log('\nSolicitação atual:\nPausar Contagem!\n')
        pausar = true;
        iniciar = true;
        res.send('Cronômetro pausado!')
    }
});

app.get('/continuar', (req, res) => {
    if (!pausar) {
        console.log('\nSolicitação Redundante:\nContinuar Contagem sem pausa!\n')
        res.send('Solicitação Inválida!')
    } else if (!iniciar) {
        console.log('\nSolicitação Redundante:\nContinuar Contagem em curso!\n')
        res.send('Solicitação Inválida!')
    } else {
        console.log('\nSolicitação atual:\nRetomar Contagem!\n')
        pausar = false;
        iniciar = true;
        inciarContagem();
        res.send('Cronômetro continuando!');
    }
});

app.get('/zerar', (req, res) => {
    console.log('\nSolicitação atual:\nZerar Contagem!\n')
    cronometro = 0, minutos = 0;
    res.send('Cronômetro zerado!')
});

function inciarContagem() {

    const timer = setInterval(() => {

        if (pausar) {
            clearInterval(timer)
        }

        if (cronometro !== 59) {
            cronometro++;
        } else {
            minutos++;
            cronometro = 0;
        }

        console.log(`Tempo atual do cronômetro: ${minutos.toString().padStart(2, "0")} minutos e ${cronometro.toString().padStart(2, "0")} segundos`);

    }, 1000);
}

app.listen(8000);
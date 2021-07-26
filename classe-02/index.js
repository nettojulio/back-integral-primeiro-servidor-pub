const alunos = [
    {
        nome: "Paula",
        apelido: "Paulete",
        idade: 26,
        signo: "Áries",
        bandaFavorita: "Rolling Stones",
        email: "paulete123@gmail.com",
        serieFavorita: "Dark",
        curso: "PDZ",
        roupaDeDormir: "pijama"
    },
    {
        nome: "Felisberto",
        apelido: "Betinho",
        idade: 20,
        signo: "Sargitário",
        bandaFavorita: "Madonna",
        email: "betinho.felis@gmail.com",
        serieFavorita: "Um maluco no pedaço",
        curso: "PDZ",
        roupaDeDormir: "só cueca"
    }
];

const alunosResumido = [];

alunos.map(x => {
    const {apelido, signo, bandaFavorita, serieFavorita, roupaDeDormir : y, ...alunoResumido} = x;    
    alunosResumido.push(alunoResumido);
});

console.log(alunosResumido);

// OPÇÃO 2 

// const alunosResumido = [];

// alunos.map(aluno => {
//     const { nome, idade, email, curso } = aluno;
//     const alunoResumido = {
//         nome: nome,
//         idade: idade,
//         email: email,
//         curso: curso
//     };

//     alunosResumido.push(alunoResumido);

// })

// console.log(alunosResumido);
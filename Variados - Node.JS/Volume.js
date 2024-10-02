//Esse algoritimo tem como função pegar multiplicar 4 variáveis para fornecer o valor de volume
//Professor: Joilson
//Aluno: Santiago

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function fazerPergunta(pergunta) {
    return new Promise((resolve) => {
        rl.question(pergunta, (entrada) => {
            resolve(parseFloat(entrada));
        });
    });
}



async function main() {
    try {
        const comprimento = await fazerPergunta('Insira o valor do comprimento: ');
        const altura = await fazerPergunta('Insira o valor do altura: ');
        const largura = await fazerPergunta('Insira o valor da largura: ');

        const volume = comprimento * largura * altura;

        console.log('O volume é de: ', volume);

    } catch (error) {
        console.error('Erro ao coletar dados de entrada,', error);
    } finally {
        rl.close();
    }
}



main();
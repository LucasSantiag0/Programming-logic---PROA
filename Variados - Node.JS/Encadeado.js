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
        const numero = await fazerPergunta('Insira o número do mês: ');

        if (isNaN(numero)) {
            console.log('Digite um número válido');
        } else if (numero === 1) {
            console.log('O mês ' + numero + ' é janeiro');
        } else if (numero === 2) {
            console.log('O mês ' + numero + ' é fevereiro');
        } else if (numero === 3) {
            console.log('O mês ' + numero + ' é março');
        } else if (numero === 4) {
            console.log('O mês ' + numero + ' é abril');
        } else if (numero === 5) {
            console.log('O mês ' + numero + ' é maio');
        } else if (numero === 6) {
            console.log('O mês ' + numero + ' é junho');
        } else if (numero === 7) {
            console.log('O mês ' + numero + ' é julho');
        } else if (numero === 8) {
            console.log('O mês ' + numero + ' é agosto');
        } else if (numero === 9) {
            console.log('O mês ' + numero + ' é setembro');
        } else if (numero === 10) {
            console.log('O mês ' + numero + ' é outubro');
        } else if (numero === 11) {
            console.log('O mês ' + numero + ' é novembro');
        } else if (numero === 12) {
            console.log('O mês ' + numero + ' é dezembro');
        } else {
            console.log('Mês inválido');
        }
    } catch (error) {
        console.log('Erro ao coletar os dados:', error);
    } finally {
        rl.close();
    }
}

main();
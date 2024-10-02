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
        const numero = await fazerPergunta('Insira um número: ');

        if (isNaN(numero)) {
            console.log('Não é um número');
        } else if (numero >= 0) {
            console.log('O número é positivo');
        } else {
            console.log('O número é negativo');
        }
    } catch (error) {
        console.log('erro: ', error);
    } finally {
        rl.close;
    }
}

main();
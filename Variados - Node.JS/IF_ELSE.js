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
        const numero = await fazerPergunta('Por favor, digite o número: ');
        if (isNaN(numero)) {
            console.log('Digite um número válido');
        } else if (numero === 1) {
            console.log('Segunda-feira');
        } else if (numero === 2) {
            console.log('Terça-feira');
        } else if (numero === 3) {
            console.log('Quarta-feira');
        } else if (numero === 4) {
            console.log('Quinta-feira');
        } else if (numero === 5) {
            console.log('Sexta-feira');
        } else if (numero === 6) {
            console.log('Sábado');
        } else if (numero === 7) {
            console.log('Domingo');
        } else {
            console.log('Não há dia correspondente');
        }
    } catch (error) {
        console.error('Erro ao coletar dados de entrada:', error);
    } finally {
        rl.close();
    }

}

main();
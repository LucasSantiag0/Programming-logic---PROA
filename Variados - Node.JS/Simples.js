const readline = require('readline')

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
        const numero = await fazerPergunta('Digite um mês: ')
        if (numero === 1) {
            console.log('O mês é janeiro');
        }
    } catch (error) {
        console.log('Não foi possível coletar dados:', error)
    } finally {
        rl.close
    }
}
main()
const readline = require('readline');
const { parseArgs } = require('util');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function fazerPergunta(pergunta) {
    return new Promise((resolve) => {
        rl.question(pergunta, (entrada) => {
            resolve(parseInt(entrada, 10));
        });
    });
}

async function main() {
    try {
        let soma = 0;
        
        for(let i=1; i<=100; i++){
            
            soma += i
            console.log(`${soma}`)
        }
    } catch (error) {
        console.log('Erro ao coletar dados: ', error);
    } finally {
        rl.close();
    }
}

main();
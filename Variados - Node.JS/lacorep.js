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
    let contadora = 1
    try {
        while (contadora < 10){
            console.log('lucas')
            contadora = contadora + 1
        }
    }
    catch (error) {
        console.log('Erro:', error);
    } finally {
        rl.close();
    }
}

main();

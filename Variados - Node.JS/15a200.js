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
        for (i = 15; i <= 200; i++) { 
            const quadrado = i * i;
            console.log('O quadrado de', i, 'é', quadrado)
        }


    } catch (error) {
        console.log('Erro ao coletar dados: ', error);
    } finally {
        rl.close();
    }
}

main()
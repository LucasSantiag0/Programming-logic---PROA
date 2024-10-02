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
        const numero = await fazerPergunta('Digite o número a ser calculado: ');
        
        console.log('=================================');
        console.log('==== Tabuada de Multiplicação ====');
        console.log('=================================');
        
        for (let i = 1; i <= 10; i++) { 
            const tabuada = numero * i;
            console.log(`${numero} x ${i} = ${tabuada}`);
        }

    } catch (error) {
        console.log('Erro ao coletar dados: ', error);
    } finally {
        rl.close();
    }
}

main();
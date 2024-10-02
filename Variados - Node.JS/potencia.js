const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function fazerPergunta(pergunta){
    return new Promise((resolve) => {
        rl.question(pergunta, (entrada) => {
            resolve(parseFloat(entrada));
        });
    });
}

async function main() {

    try {
        const base = await fazerPergunta('Digite o número da base: ')
        const expoente = await fazerPergunta('Digite o número do expoente: ')
        let potencia = 1

        for (let i = 0; i < expoente; i++){
            potencia *= base;
        }
        
        console.log('O valor da potenciação é de: ', potencia)

    }
    catch (error) {
        console.log('Erro:', error);
    } finally {
        rl.close();
    }
}

main();

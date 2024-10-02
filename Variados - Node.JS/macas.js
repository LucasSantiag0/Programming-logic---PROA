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
    })
}

async function main() {
    try {
        const macas = await fazerPergunta('Insira a quantidade de macas compradas: ');
        if (macas < 6) {
            console.log('As maçãs sairão por R$1,30 cada, totalizando: R$', 1.30 * macas);
        } else {
            console.log('As maçãs sairão por R$1,00 cada, totalizando: R$', 1.00 * macas);
        }
    } catch(error){
        console.log(error)
    }finally{
        rl.close();
    }
}

main();
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

async function main(){
    try{
        const numero = await fazerPergunta('Digite o número: ')

        if(numero <= 6){
            console.log('Primeiro semestre');
        }
        else{
            console.log('Segundo semestre');
        }
    } catch(error){
        console.log('Erro ao coletar dados: ', error);
    } finally{
        rl.close();
    }
}

main()
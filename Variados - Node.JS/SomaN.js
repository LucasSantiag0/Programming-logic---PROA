//Esse algoritimo tem como função pegar 4 variáveis e fazer a soma e multiplicação
//Professor: Joilson
//Aluno: Santiago

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
        const numero1 = await fazerPergunta('Por favor, insira o primeiro número: ');
        const numero2 = await fazerPergunta('Por favor, insira o segundo número: ');
        const numero3 = await fazerPergunta('Por favor, insira o terceiro número: ');
        const numero4 = await fazerPergunta('Por favor, insira o quarto número: ');

        // Agora você pode usar os números coletados
        console.log('O resultado das adições é: ');
        console.log('Primeira adição (A+B): ', numero1 + numero2);
        console.log('Segunda adição (A+C): ', numero1 + numero3);
        console.log('Terceira adição (A+D): ', numero1 + numero4);
        console.log('Quarta adição (B+C): ', numero2 + numero3);
        console.log('Quinta adição (B+D): ', numero2 + numero4);
        console.log('Sexta adição (C+D): ', numero3 + numero4);

        console.log('O resultado das multiplicações é: ')
        console.log('Primeira multiplicação (A+B): ', numero1 * numero2);
        console.log('Segunda multiplicação(A+C): ', numero1 * numero3);
        console.log('Terceira multiplicação (A+D): ', numero1 * numero4);
        console.log('Quarta multiplicação (B+C): ', numero2 * numero3);
        console.log('Quinta multiplicação (B+D): ', numero2 * numero4);
        console.log('Sexta multiplicação (C+D): ', numero3 * numero4);


    } catch (error) {
        console.error('Erro ao coletar dados de entrada:', error);
    } finally {
        rl.close();
    }
}

main();
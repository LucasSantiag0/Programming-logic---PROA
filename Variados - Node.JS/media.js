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
        const nota1 = await fazerPergunta('Escreva a primeira nota: ')
        const nota2 = await fazerPergunta('Escreva a Segunda nota: ')
        const media = ((nota1 + nota2) / 2).toFixed(2);

        if (isNaN(nota1) || isNaN(nota2)) {
            console.log('Insira números válidos');
        } else if (media >= 6) {
            console.log('A média do aluno é de: ', media, 'Aluno aprovado')
        } else {
            console.log('A média do aluno é de: ', media, 'Aluno reprovado')
        }
    } catch (error) {
        console.log(error)
    } finally {
        rl.close();
    }

}

main()
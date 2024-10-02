const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Por favor, insira um número real: ', (entrada) => {
    // Converte a entrada para um número real
    const numero1 = parseFloat(entrada);

    // Verifica se a conversão foi bem-sucedida
    if (isNaN(numero1)) {
        console.log("O valor inserido é: " + numero1);
    } else {
        console.log("Entrada inválida. Por favor, insira um número real.");
    }

    rl.close();
});
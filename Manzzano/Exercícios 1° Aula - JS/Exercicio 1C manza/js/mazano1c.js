//Elaborar um programa que apresente no final o somatório dos valores pares existentes na faixa de 1 até 500.
let contadora = 1;
let soma = 0;

while (contadora <= 500) {
    if (contadora % 2 === 0) {
        soma += contadora; // Adiciona contadora a soma se for par
    }
    contadora++ //a contadora tem que estar fora do laço de repetição 
}

alert("A soma dos números pares até 500 é de: " + soma);

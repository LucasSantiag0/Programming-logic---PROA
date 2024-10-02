let idadeHomem1 = parseInt(prompt("Digite a idade do primeiro homem:"));
let idadeHomem2 = parseInt(prompt("Digite a idade do segundo homem:"));

let idadeMulher1 = parseInt(prompt("Digite a idade da primeira mulher:"));
let idadeMulher2 = parseInt(prompt("Digite a idade da segunda mulher:"));

let homemMaisVelho, homemMaisNovo;
if (idadeHomem1 > idadeHomem2) {
    homemMaisVelho = idadeHomem1;
    homemMaisNovo = idadeHomem2;
} else {
    homemMaisVelho = idadeHomem2;
    homemMaisNovo = idadeHomem1;
}

let mulherMaisVelha, mulherMaisNova;
if (idadeMulher1 > idadeMulher2) {
    mulherMaisVelha = idadeMulher1;
    mulherMaisNova = idadeMulher2;
} else {
    mulherMaisVelha = idadeMulher2;
    mulherMaisNova = idadeMulher1;
}

let soma = homemMaisVelho + mulherMaisNova;


let produto = homemMaisNovo * mulherMaisVelha;

document.getElementById("texto").innerHTML = 
    "A soma do homem mais velho com a mulher mais nova é: " + soma + 
    "<br>O produto do homem mais novo com a mulher mais velha é: " + produto;
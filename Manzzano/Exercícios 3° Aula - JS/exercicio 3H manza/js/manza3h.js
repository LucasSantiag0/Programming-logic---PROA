// Elaborar um programa que apresente como resultado o valor de uma potência de uma base qualquer elevada a um expoente qualquer, ou seja, de BE, em que B é o valor da base e E o valor do expoente. Observe que neste exercício não pode ser utilizado o operador de exponenciação do portuguol (^)


let base = Number(prompt("Digite a base:"))
let expoente = Number(prompt("Digite o expoente:"))
let potencia = 1

for (let i = 1; i <= expoente; i++) {
    potencia *= base
}

alert(base + " elevado a " + expoente + " é: " + potencia)
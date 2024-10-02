/* Elaborar um programa que apresente como resultado o valor de uma potência de uma base
qualquer elevada a um expoente qualquer, ou seja, de BE, em que B é o valor da base e E o valor
do expoente. Observe que neste exercício não pode ser utilizado o operador de exponenciação do portuguol */ 
let base = parseInt(prompt("Informe o valor da base desejada "))
let expoente = parseInt(prompt("Informe o valor do expoente desejado"))
let resultado = 1
let contadora = 1

while (contadora <= expoente){
    resultado *= base
    contadora++
}
alert("O resultado da potencia é:" + resultado)
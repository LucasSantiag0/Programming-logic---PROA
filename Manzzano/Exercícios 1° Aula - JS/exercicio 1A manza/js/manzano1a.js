/*Apresentar os resultados de uma tabuada de multiplicar (de 1 até 10) de um número qualquer*/


let numero = parseInt(prompt("Digite um número para ver a tabuada:"))
let i = 1;
// i nesse caso seria a contadora 
while (i <= 10) {
  alert(numero + " x " + i + " = " + (numero * i))
  i = i + 1;
}
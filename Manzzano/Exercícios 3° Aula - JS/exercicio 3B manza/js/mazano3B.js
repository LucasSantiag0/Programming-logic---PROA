//Apresentar os resultados de uma tabuada de multiplicar (de 1 até 10) de um número qualquer

let numero = Number(prompt("Digite o número para a tabuada:"))
let resultados = ""

for (let i = 1; i <= 10; i++) {
    let multiplicacao = numero * i
    resultados += numero + " x " + i + " = " + multiplicacao + "\n"
}

alert(resultados)
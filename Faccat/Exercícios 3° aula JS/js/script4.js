let numero1 = parseFloat(prompt("Digite a nota da 1° avaliação"))
let numero2 = parseFloat(prompt("Digite a nota da 2° avaliação"))
let media = (numero1 + numero2) / 2

document.getElementById("texto").innerHTML = "a média do aluno é de " + media
let nota1 = parseFloat(prompt("Digite a primeira nota"))
let nota2 = parseFloat(prompt("Digite a segunda nota"))
let nota3 = parseFloat(prompt("Digite a terceira nota"))

let totalMedia = (nota1 * 2 + nota2 * 3 + nota3 * 5) / 10


document.getElementById("media").innerHTML = "A media do aluno é de: " + totalMedia
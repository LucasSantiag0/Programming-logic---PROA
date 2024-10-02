let numero = parseFloat(prompt("Digite o número"))


if (numero >= 0) {
    document.getElementById("texto").innerHTML = "O número é positivo"
} else{
    document.getElementById("texto").innerHTML = "O número é negativo"
}
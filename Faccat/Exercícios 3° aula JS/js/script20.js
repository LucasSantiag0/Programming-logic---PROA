let valor1 = parseInt(prompt("Digite o primeiro valor"))
let valor2 = parseInt(prompt("Digite o segundo valor"))

if(valor1 > valor2){
    document.getElementById("texto").innerHTML = "O numero " + valor1 + " é maior"
} else if(valor1 === valor2){
    document.getElementById("texto").innerHTML = "Os números são iguais"
} else{
    document.getElementById("texto").innerHTML = "O numero " + valor2 + " é maior"
}
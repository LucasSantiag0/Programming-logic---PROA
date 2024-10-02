let numero1 = parseInt(prompt("Digite o 1° valor"))
let numero2 = parseInt(prompt("Digite o 2° valor"))

if(numero1 === numero2){
    document.getElementById("texto").innerHTML = "Digite números diferentes"
} else if(isNaN(numero1) || isNaN(numero2)){
    document.getElementById("texto").innerHTML = "Digite um número válido"
} else if(numero1 > numero2){
    document.getElementById("texto").innerHTML = "a ordem dos números é: " + numero2 + ", " + numero1 
} else{
    document.getElementById("texto").innerHTML = "a ordem dos números é: " + numero1 + ", " + numero2 
}
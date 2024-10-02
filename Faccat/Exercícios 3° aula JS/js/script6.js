let numero1 = parseInt(prompt("Digite o 1° valor"))
let numero2 = parseInt(prompt("Digite o 2° valor"))

if(numero1 === numero2){
    document.getElementById("texto").innerHTML = "Digite números diferentes"
} else if(isNaN(numero1) || isNaN(numero2)){
    document.getElementById("texto").innerHTML = "Digite um número válido"
} else if(numero1 > numero2){
    document.getElementById("texto").innerHTML = "O número " + numero1 + " é o maior número" 
} else{
    document.getElementById("texto").innerHTML = "O número " + numero2 + " é o maior número" 
}
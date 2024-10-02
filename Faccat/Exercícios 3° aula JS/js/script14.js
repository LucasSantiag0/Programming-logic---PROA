let numero = parseInt(prompt("Digite um número"))

if(numero === 0){
    document.getElementById("texto").innerHTML = "Zero"
} else if(numero < 0){
    document.getElementById("texto").innerHTML = "negativo"
} else{
    document.getElementById("texto").innerHTML = "positivo"
}
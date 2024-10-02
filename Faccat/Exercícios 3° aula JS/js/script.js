let numero = parseInt(prompt("Insira o número"));

if(numero > 10){
    document.getElementById("texto").innerHTML = "O número é maior que 10"
} else if(numero === 10){
    document.getElementById("texto").innerHTML = "O número é igual a 10"
} else{
    document.getElementById("texto").innerHTML = "O número menor que 10"
}
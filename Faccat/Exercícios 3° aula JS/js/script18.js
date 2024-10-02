let valor1 = parseFloat(prompt("Digite o valor do 1° lado"));
let valor2 = parseFloat(prompt("Digite o valor do 2° lado"));
let valor3 = parseFloat(prompt("Digite o valor do 3° lado"));

if(valor1 + valor2 > valor3 && valor1 + valor3 > valor2 && valor2 + valor3 > valor1){
    document.getElementById("texto").innerHTML = "Pode se formar um triangulo"
} else{
    document.getElementById("texto").innerHTML = "Não se pode se formar um triangulo"
}
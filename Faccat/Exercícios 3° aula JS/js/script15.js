let valor1 = parseFloat(prompt("Digite o primeiro valor:"));
let valor2 = parseFloat(prompt("Digite o segundo valor:"));
let valor3 = parseFloat(prompt("Digite o terceiro valor:"));

let maior;

if (valor1 > valor2 && valor1 > valor3) {
    maior = valor1;
    document.getElementById("texto").innerHTML = "O maior valor é: " + maior;
} else if (valor2 > valor1 && valor2 > valor3) {
    maior = valor2;
    document.getElementById("texto").innerHTML = "O maior valor é: " + maior;
} else {
    maior = valor3;
    document.getElementById("texto").innerHTML = "O maior valor é: " + maior;
}



let valor1 = parseFloat(prompt("Digite o primeiro valor:"));
let valor2 = parseFloat(prompt("Digite o segundo valor:"));
let valor3 = parseFloat(prompt("Digite o terceiro valor:"));

let primeiro, segundo, terceiro;


if (valor1 < valor2 && valor1 < valor3) {
    primeiro = valor1;
    if (valor2 < valor3) {
        segundo = valor2;
        terceiro = valor3;
    } else {
        segundo = valor3;
        terceiro = valor2;
    }
} else if (valor2 < valor1 && valor2 < valor3) {
    primeiro = valor2;
    if (valor1 < valor3) {
        segundo = valor1;
        terceiro = valor3;
    } else {
        segundo = valor3;
        terceiro = valor1;
    }
} else {
    primeiro = valor3;
    if (valor1 < valor2) {
        segundo = valor1;
        terceiro = valor2;
    } else {
        segundo = valor2;
        terceiro = valor1;
    }
}


document.getElementById("texto").innerHTML = "Os valores em ordem crescente são: " + primeiro + ", " + segundo + ", " + terceiro;
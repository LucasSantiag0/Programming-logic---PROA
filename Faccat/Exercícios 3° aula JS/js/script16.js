let valor1 = parseFloat(prompt("Digite o primeiro valor:"));
let valor2 = parseFloat(prompt("Digite o segundo valor:"));
let valor3 = parseFloat(prompt("Digite o terceiro valor:"));


let somaDosMaiores;

if (valor1 > valor2 && valor1 > valor3) {

    somaDosMaiores = valor1 + (valor2 > valor3 ? valor2 : valor3);
} else if (valor2 > valor1 && valor2 > valor3) {

    somaDosMaiores = valor2 + (valor1 > valor3 ? valor1 : valor3);
} else {

    somaDosMaiores = valor3 + (valor1 > valor2 ? valor1 : valor2);
}


document.getElementById("texto").innerHTML = "A soma dos dois maiores valores é: " + somaDosMaiores;
let altura = parseFloat(prompt("Digite a sua altura em metros (ex: 1.75)"));
let sexo;
let pesoIdeal;

do {
    sexo = prompt("Digite o seu sexo (M/F):").toLowerCase();
} while (sexo !== "m" && sexo !== "f");


if (sexo === "m") {
    pesoIdeal = (72.7 * altura) - 58;
    document.getElementById("texto").innerHTML = "O seu peso ideal é: " + pesoIdeal.toFixed(2) + " kg";
} else { 
    pesoIdeal = (62.1 * altura) - 44.7;
    document.getElementById("texto").innerHTML = "O seu peso ideal é: " + pesoIdeal.toFixed(2) + " kg";
}

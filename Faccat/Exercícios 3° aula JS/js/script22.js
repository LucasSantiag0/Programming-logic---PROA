let pergunta;
let litros;
let alcool = 2.90;
let gasolina = 3.30;
let preco;

do { pergunta = prompt("O que você deseja comprar? (A/G)").toLowerCase()}

while (pergunta !== "a" && pergunta !== "g");

if (pergunta === "a") {
    litros = parseFloat(prompt("Quantos litros de alcool você deseja colocar?"));
    if (litros <= 20) {
        preco = (alcool * litros) - (3 / 100) * (alcool * litros)
    } else {
        preco = (alcool * litros) - (5 / 100) * (alcool * litros)
    };
} else if (pergunta === "g") {
    litros = parseFloat(prompt("Quantos litros de gasolina você deseja colocar"))
    if (litros <= 20) {
        preco = (gasolina * litros) - (4 / 100) * (gasolina * litros)
    } else {
        preco = (gasolina * litros) - (6 / 100) * (gasolina * litros)
    }
};

document.getElementById("texto").innerHTML = "O valor a ser pago é de: R$" + preco.toFixed(2);
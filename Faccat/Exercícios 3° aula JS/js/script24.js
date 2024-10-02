let kgMorango = parseFloat(prompt("Digite a quantidade de morangos (em Kg):"));
let kgMaca = parseFloat(prompt("Digite a quantidade de maçãs (em Kg):"));


let precoMorango, precoMaca, precoTotal;


if (kgMorango <= 5) {
    precoMorango = kgMorango * 2.50;
} else {
    precoMorango = kgMorango * 2.20;
}


if (kgMaca <= 5) {
    precoMaca = kgMaca * 1.80;
} else {
    precoMaca = kgMaca * 1.50;
}


precoTotal = precoMorango + precoMaca;


let kgTotal = kgMorango + kgMaca;
if (kgTotal > 8 || precoTotal > 25) {
    precoTotal = precoTotal - (10 / 100) * precoTotal;
}


document.getElementById("texto").innerHTML =
    "O valor a ser pago pelo cliente é: R$ " + precoTotal.toFixed(2);
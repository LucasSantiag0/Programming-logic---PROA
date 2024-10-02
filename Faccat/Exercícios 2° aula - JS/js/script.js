let custoFabrica = parseFloat(prompt("Digite aqui o custo de fábrica do carro"));
let percentualDistribuidor = 28 / 100
let Impostos = 45 / 100
let custoFinal = (custoFabrica * percentualDistribuidor) + (custoFabrica * Impostos) + custoFabrica

alert("O valor final do carro é de:" + custoFinal)

document.getElementById("carro").innerHTML = "O preço final do carro é de: " + custoFinal;
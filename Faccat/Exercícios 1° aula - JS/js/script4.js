var salarioAtual = parseFloat(prompt("Digite o valor do salário atual"));
var valorReajuste = parseFloat(prompt("Digite o valor do reajuste "));

var totalReajuste = (valorReajuste / 100) * salarioAtual;
var totalSalario = salarioAtual + totalReajuste

alert(totalSalario)

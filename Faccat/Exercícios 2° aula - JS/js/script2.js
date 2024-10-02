let salarioFixo = parseFloat(prompt("Digite o seu salário"))
let qtdCarros = parseFloat(prompt("Digite a qtd. de carros vendidos"))
let totalValorVendas = parseFloat(prompt("Digite a qtd. total de vendas"))
let comissaoCarros = 5 / 100 * qtdCarros
let comsisaoVendas = 5 / 100 * totalValorVendas
let salarioFinal = salarioFixo * comissaoCarros + salarioFixo * comsisaoVendas + salarioFixo

document.getElementById("salarioFinal").innerHTML = "O seu salário final é de: " + salarioFinal

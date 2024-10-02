let salarioFixo  = parseFloat(prompt("Digite o seu salário fixo"))
let valorVendas =  parseFloat(prompt ("Digite o valor total das vendas"))
let comissao  
let salarioTotal

if(valorVendas <= 1500){
    comissao = 3 / 100
    salarioTotal = (valorVendas * comissao) + salarioFixo
    document.getElementById("texto").innerHTML = "O valor do seu salário é de: " + salarioTotal
} else{
    comissao = 5 / 100
    salarioTotal = (valorVendas * comissao) + salarioFixo
    document.getElementById("texto").innerHTML = "O valor do seu salário é de: " + salarioTotal
}

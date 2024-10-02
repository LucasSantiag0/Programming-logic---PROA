let qtdProduto = parseInt(prompt("Digite a quantidade do produto contida no estoque"))
let qtdMinima = parseInt(prompt("digite a quantidade mínima exigida no estoque"))
let qtdMaxima = parseInt(prompt("Digite a quantidade máxima perimitda no estoque"))
let mediaProduto = (qtdMinima + qtdMaxima)/2

if(qtdProduto >= mediaProduto){
    document.getElementById("texto").innerHTML = "Não efetuar a compra"
} else{
    document.getElementById("texto").innerHTML = "Efetuar a compra"
}
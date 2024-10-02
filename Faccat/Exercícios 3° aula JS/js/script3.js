let numero = parseInt(prompt("Digite o número de maçãs compradas"))
let maca = 1.30

if(numero < 6){
document.getElementById("texto").innerHTML = "O valor total de maçãs é de " + maca * numero
} else{
    document.getElementById("texto").innerHTML = "O valor total de maçãs é de " + (maca - 0.30) * numero
}
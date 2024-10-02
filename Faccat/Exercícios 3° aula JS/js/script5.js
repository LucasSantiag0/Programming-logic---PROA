let anoNascimento
do {
    anoNascimento = prompt("Digite o seu ano de nascimento")
} while (anoNascimento.length != 4 || isNaN(parseInt(anoNascimento)))

const anoAtual = new Date().getFullYear()
let idade = anoAtual - parseInt(anoNascimento)

if(idade < 18){
    document.getElementById("texto").innerHTML = "Você não tem idade para votar"
} else{
    document.getElementById("texto").innerHTML = "Você tem idade para votar"
}

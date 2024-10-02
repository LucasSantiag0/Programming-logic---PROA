let numeroContaCliente = parseInt(prompt("Digite o número da conta"));
let saldoAtual = parseFloat(prompt("Digite o saldo atual"));
let debito = parseFloat(prompt("Digite o quanto será debitado"));
let credito = parseFloat(prompt("Digite o quanto será creditado"));
let saldoFinal = saldoAtual - debito + credito;

if (saldoFinal >= 0) {
    document.getElementById("texto").innerHTML = "O saldo da sua conta é positivo";

} else {

    document.getElementById("texto").innerHTML = "O saldo da sua conta é negativo";
}
document.getElementById("quebraLinha").innerHTML = "-------------------------------------------";
document.getElementById("saldo").innerHTML = "O saldo atual da conta é de: " + saldoFinal.toFixed(2);



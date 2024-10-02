/*Elaborar um programa que efetue a leitura sucessiva de valores numéricos e apresente no final o
total do somatório, a média aritmética e o total de valores lidos. O programa deve fazer as leituras
dos valores enquanto o usuário estiver fornecendo valores positivos. Ou seja, o programa deve
parar quando o usuário fornecer um valor negativo. Não se esqueça que o usuário pode entrar
como primeiro número um número negativo, portanto, cuidado com a divisão por zero no cálculo da
média.*/



let somatorio = 0
let media = 0
let contadora = 0
let valor

do {
    valor = Number(prompt("Digite um número (número negativo para encerrar) "))
    if (valor >= 0) {
        somatorio += valor
        contadora++
    } else if (valor < 0) {
        media = somatorio / contadora
    }
} while (valor >= 0)
    alert("A soma total é " + somatorio + " e a média é " + media)
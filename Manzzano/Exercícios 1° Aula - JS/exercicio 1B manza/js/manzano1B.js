// Apresentar o total da soma obtida dos cem primeiros números inteiros (1+2+3+4+...+98+99+100)
let contadora = 1
let soma = 0
while (contadora <= 100){
 soma = soma + contadora
 contadora = contadora + 1
}
alert("A soma dos 100 primeiros numeros entre si é" + soma)
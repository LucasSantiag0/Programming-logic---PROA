Algoritmo "Calculo Distancia"
// Disciplina   : [L�gica de Programa��o]
// Professor   : Joilson
// Descri��o   : Esse algoritimo calcula a distancia percorrida, os kms, o tempo e os litros usados em uma viagem
// Autor(a)    : Santiago
// Data atual  : 29/08/2024

Var
// Se��o de Declara��es das vari�veis
time, velocidade:real
distancia, litros_usados:real

INICIO

// Se��o de Comandos, procedimento, fun��es, operadores, etc...

escreval("Qual foi o tempo gasto? ")
leia(time)
escreval("Qual foi a velocidade media?")
leia(velocidade)

distancia <- time * velocidade
litros_usados <- distancia / 12

escreval("A velocidade media foi de: ", velocidade)
escreval("O tempo gasto na viagem foi de: ", time)
escreval("A distancia percorrida foi de: ", distancia)
escreval("A quantidade de litros usados na viagem foi de: ", litros_usados)



Fimalgoritmo
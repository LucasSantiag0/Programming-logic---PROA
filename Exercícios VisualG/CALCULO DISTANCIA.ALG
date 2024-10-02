Algoritmo "Calculo Distancia"
// Disciplina   : [Lógica de Programação]
// Professor   : Joilson
// Descrição   : Esse algoritimo calcula a distancia percorrida, os kms, o tempo e os litros usados em uma viagem
// Autor(a)    : Santiago
// Data atual  : 29/08/2024

Var
// Seção de Declarações das variáveis
time, velocidade:real
distancia, litros_usados:real

INICIO

// Seção de Comandos, procedimento, funções, operadores, etc...

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
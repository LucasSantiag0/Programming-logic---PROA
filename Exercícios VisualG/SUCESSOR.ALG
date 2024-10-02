Algoritmo "Sucessor"
// Disciplina   : [Lógica de Programação]
// Professor   : Joilson
// Descrição   : O programa pega um valor e digita o seu sucessor
// Autor(a)    : Santiago
// Data atual  : 28/08/2024
Var
// Seção de Declarações das variáveis
numero1:real
Sucessor1:real
antecessor1:real


Inicio
// Seção de Comandos, procedimento, funções, operadores, etc...
escreval ("Digite o número que deseja saber o Sucessor: ")
leia (numero1)
Sucessor1 <- numero1 + 1
antecessor1 <- numero1 -1


SE numero1 >= 0 ENTAO
escreva("O sucessor do seu número é: ", Sucessor1)
SENAO
escreva("O antecessor do seu número é: ", antecessor1)

FIMSE
Fimalgoritmo
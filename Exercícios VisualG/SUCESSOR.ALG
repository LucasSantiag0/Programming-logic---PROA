Algoritmo "Sucessor"
// Disciplina   : [L�gica de Programa��o]
// Professor   : Joilson
// Descri��o   : O programa pega um valor e digita o seu sucessor
// Autor(a)    : Santiago
// Data atual  : 28/08/2024
Var
// Se��o de Declara��es das vari�veis
numero1:real
Sucessor1:real
antecessor1:real


Inicio
// Se��o de Comandos, procedimento, fun��es, operadores, etc...
escreval ("Digite o n�mero que deseja saber o Sucessor: ")
leia (numero1)
Sucessor1 <- numero1 + 1
antecessor1 <- numero1 -1


SE numero1 >= 0 ENTAO
escreva("O sucessor do seu n�mero �: ", Sucessor1)
SENAO
escreva("O antecessor do seu n�mero �: ", antecessor1)

FIMSE
Fimalgoritmo
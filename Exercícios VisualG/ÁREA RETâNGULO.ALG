Algoritmo "�rea ret�ngulo"
// Disciplina   : [L�gica de Programa��o]
// Professor   : Joilson
// Descri��o   : O programa calcula a �rea de um ret�ngulo
// Autor(a)    : Santiago
// Data atual  : 28/08/2024
Var
// Se��o de Declara��es das vari�veis
altura:real
base:real
area:real
UnidadeMedida:caractere


Inicio
// Se��o de Comandos, procedimento, fun��es, operadores, etc...
// Atribui��o de valores
escreval ("Digite a unidade de medida: ")
leia (UnidadeMedida)
escreval ("Digite a altura do ret�ngulo: ")
leia (altura)
escreval ("Digite a largura do ret�ngulo: ")
leia (base)
area <- altura * base
escreva ("A �rea do seu ret�ngulo � de: ", area, UnidadeMedida)


Fimalgoritmo
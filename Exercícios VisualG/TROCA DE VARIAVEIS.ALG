Algoritmo "Troca de variaveis"
// Disciplina   : [Linguagem e L�gica de Programa��o]
// Professor   : Antonio Carlos Nicolodi 
// Descri��o   : Aqui voc� descreve o que o programa faz! (fun��o)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 29/08/2024
Var
// Se��o de Declara��es das vari�veis 
A, B, C:caractere

Inicio
// Se��o de Comandos, procedimento, fun��es, operadores, etc...
escreval("Escreva o valor da variavel A: ")
leia(A)

escreval("Escreva o valor da variavel B: ")
leia(B)

C <- A
A <- B
B <- C

escreval("O valor de A e: ", A)
escreval("O valor de B e: ", B)


Fimalgoritmo
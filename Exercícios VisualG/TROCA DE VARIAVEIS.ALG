Algoritmo "Troca de variaveis"
// Disciplina   : [Linguagem e Lógica de Programação]
// Professor   : Antonio Carlos Nicolodi 
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 29/08/2024
Var
// Seção de Declarações das variáveis 
A, B, C:caractere

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc...
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
Algoritmo "Idade em dias"
// Disciplina   : [Linguagem e L�gica de Programa��o]
// Professor   : Antonio Carlos Nicolodi 
// Descri��o   : Aqui voc� descreve o que o programa faz! (fun��o)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 29/08/2024
Var
// Se��o de Declara��es das vari�veis
meses, dias, anos, idade_dias: inteiro


Inicio
// Se��o de Comandos, procedimento, fun��es, operadores, etc...
escreval("Anos de vida: ")
leia(anos)
escreval("Meses de vida: ")
leia(meses)
escreval("Dias de vida: ")
leia(dias)

meses <- meses * 30
anos <- anos * 365
Idade_dias <- anos + meses + dias

escreval("A idade da pessoa e: ", idade_dias, " dias")


Fimalgoritmo
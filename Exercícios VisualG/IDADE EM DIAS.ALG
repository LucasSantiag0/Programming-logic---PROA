Algoritmo "Idade em dias"
// Disciplina   : [Linguagem e Lógica de Programação]
// Professor   : Antonio Carlos Nicolodi 
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 29/08/2024
Var
// Seção de Declarações das variáveis
meses, dias, anos, idade_dias: inteiro


Inicio
// Seção de Comandos, procedimento, funções, operadores, etc...
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
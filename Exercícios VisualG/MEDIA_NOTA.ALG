Algoritmo "Media_nota"
// Disciplina   : [L�gica de Programa��o]
// Professor   : Joilson
// Descri��o   : Nesse algoritimo voce calcula a media de nota de um aluno
// Autor(a)    : Santiago
// Data atual  : 29/08/2024
Var
// Se��o de Declara��es das vari�veis 
 nota1, nota2, nota3, media:real

Inicio
// Se��o de Comandos, procedimento, fun��es, operadores, etc... 
escreval("Escreva a primeira nota")
leia(nota1)
escreval("Escreva a segunda nota")
leia(nota2)
escreval("Escreva a terceira nota")
leia(nota3)

media <- (nota1 * 2 + nota2 * 3 + nota3 * 5) / 10

escreva("A media final e de: ", media)


Fimalgoritmo
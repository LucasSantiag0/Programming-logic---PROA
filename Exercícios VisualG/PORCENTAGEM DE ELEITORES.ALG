Algoritmo "Porcentagem de eleitores"
// Disciplina   : [Linguagem e L�gica de Programa��o]
// Professor   : Antonio Carlos Nicolodi 
// Descri��o   : Aqui voc� descreve o que o programa faz! (fun��o)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 29/08/2024
Var
// Se��o de Declara��es das vari�veis
total_eleitores, branco, nulo, validos:real


Inicio
// Se��o de Comandos, procedimento, fun��es, operadores, etc...
escreval("Total de eleitores:")
leia(total_eleitores)
escreval("Numero de votos brancos:")
leia(branco)
escreval("Numero de votos nulos:")
leia(nulo)
escreval("Numero de votos validos:")
leia(validos)

branco <- (branco / total_eleitores) * 100
nulo <- (nulo / total_eleitores) * 100
validos <- (validos / total_eleitores) * 100

escreval("As respectivas porcentagens sao: branco:", branco, "%", " nulo: ", nulo, "%", " validos: ", validos, "%")


Fimalgoritmo
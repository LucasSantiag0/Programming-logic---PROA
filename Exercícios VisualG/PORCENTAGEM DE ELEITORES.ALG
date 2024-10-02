Algoritmo "Porcentagem de eleitores"
// Disciplina   : [Linguagem e Lógica de Programação]
// Professor   : Antonio Carlos Nicolodi 
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 29/08/2024
Var
// Seção de Declarações das variáveis
total_eleitores, branco, nulo, validos:real


Inicio
// Seção de Comandos, procedimento, funções, operadores, etc...
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
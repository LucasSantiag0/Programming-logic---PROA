Algoritmo "Porcentagem custo cliente"
// Disciplina   : [Linguagem e L�gica de Programa��o]
// Professor   : Joilson
// Descri��o   : Esse algoritimo tem como funcao calcular os custos finais para um cliente
// Autor(a)    : Santiago
// Data atual  : 29/08/2024
Var
// Se��o de Declara��es das vari�veis 
percentual_distribuidor, impostos, custo_fabrica, total_tributos, custo_cliente:real



Inicio
// Se��o de Comandos, procedimento, fun��es, operadores, etc... 

 escreval("Qual e o custo de fabrica: ")
 leia(custo_fabrica)
 
 percentual_distribuidor := 28
 impostos := 45
 total_tributos <- ((custo_fabrica * percentual_distribuidor) /100) + ((custo_fabrica * impostos) /100)
 custo_cliente <- custo_fabrica + total_tributos
 
 escreval("O custo total do cliente e de: ", custo_cliente)


Fimalgoritmo
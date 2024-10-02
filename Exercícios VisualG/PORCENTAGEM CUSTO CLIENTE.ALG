Algoritmo "Porcentagem custo cliente"
// Disciplina   : [Linguagem e Lógica de Programação]
// Professor   : Joilson
// Descrição   : Esse algoritimo tem como funcao calcular os custos finais para um cliente
// Autor(a)    : Santiago
// Data atual  : 29/08/2024
Var
// Seção de Declarações das variáveis 
percentual_distribuidor, impostos, custo_fabrica, total_tributos, custo_cliente:real



Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 

 escreval("Qual e o custo de fabrica: ")
 leia(custo_fabrica)
 
 percentual_distribuidor := 28
 impostos := 45
 total_tributos <- ((custo_fabrica * percentual_distribuidor) /100) + ((custo_fabrica * impostos) /100)
 custo_cliente <- custo_fabrica + total_tributos
 
 escreval("O custo total do cliente e de: ", custo_cliente)


Fimalgoritmo
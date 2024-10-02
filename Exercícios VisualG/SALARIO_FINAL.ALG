Algoritmo "Salario_final"
// Disciplina   : [Linguagem e Lógica de Programação]
// Professor   : Antonio Carlos Nicolodi 
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 29/08/2024
Var
// Seção de Declarações das variáveis 
salario_fixo, comissao_fixa, total_vendas, porcentagem_vendas, adicionais_salario, carros_vendidos, salario_final:real

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc...
escreval("Qual seu salario fixo? ")
leia(salario_fixo)
escreval("Quantos carros voce vendeu?")
leia(carros_vendidos)
escreval("Qual o valor total das suas vendas?")
leia(total_vendas)

comissao_fixa <- 2
porcentagem_vendas <- 5
adicionais_salario <- ((carros_vendidos * comissao_fixa)/100) + ((total_vendas * porcentagem_vendas)/100)
salario_final <- salario_fixo + adicionais_salario

escreval("O seu salario total e de: ", salario_final)



Fimalgoritmo
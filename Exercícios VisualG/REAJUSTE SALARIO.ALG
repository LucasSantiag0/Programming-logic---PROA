Algoritmo "Reajuste salario"
// Disciplina   : [Linguagem e Lógica de Programação]
// Professor   : Antonio Carlos Nicolodi 
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 29/08/2024
Var
// Seção de Declarações das variáveis
salario_anterior, percentual_reajuste, valor_reajuste, salario_final:real


Inicio
// Seção de Comandos, procedimento, funções, operadores, etc...
escreval("Digite o salario anterior: ")
leia (salario_anterior)
escreval("Escreva o percentual de reajuste: ")
leia (Percentual_reajuste)
valor_reajuste <- (salario_anterior * percentual_reajuste) / 100
salario_final <- valor_reajuste + salario_anterior
escreval ("O salario apos o reajuste fica: ", salario_final)


Fimalgoritmo
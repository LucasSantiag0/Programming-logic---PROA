Algoritmo "Reajuste salario"
// Disciplina   : [Linguagem e L�gica de Programa��o]
// Professor   : Antonio Carlos Nicolodi 
// Descri��o   : Aqui voc� descreve o que o programa faz! (fun��o)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 29/08/2024
Var
// Se��o de Declara��es das vari�veis
salario_anterior, percentual_reajuste, valor_reajuste, salario_final:real


Inicio
// Se��o de Comandos, procedimento, fun��es, operadores, etc...
escreval("Digite o salario anterior: ")
leia (salario_anterior)
escreval("Escreva o percentual de reajuste: ")
leia (Percentual_reajuste)
valor_reajuste <- (salario_anterior * percentual_reajuste) / 100
salario_final <- valor_reajuste + salario_anterior
escreval ("O salario apos o reajuste fica: ", salario_final)


Fimalgoritmo
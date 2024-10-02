Algoritmo "Área retângulo"
// Disciplina   : [Lógica de Programação]
// Professor   : Joilson
// Descrição   : O programa calcula a área de um retângulo
// Autor(a)    : Santiago
// Data atual  : 28/08/2024
Var
// Seção de Declarações das variáveis
altura:real
base:real
area:real
UnidadeMedida:caractere


Inicio
// Seção de Comandos, procedimento, funções, operadores, etc...
// Atribuição de valores
escreval ("Digite a unidade de medida: ")
leia (UnidadeMedida)
escreval ("Digite a altura do retângulo: ")
leia (altura)
escreval ("Digite a largura do retângulo: ")
leia (base)
area <- altura * base
escreva ("A área do seu retângulo é de: ", area, UnidadeMedida)


Fimalgoritmo
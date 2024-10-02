/*Apresentar os resultados das potências de 3, variando do expoente 0 até o expoente 15. Deve ser
considerado que qualquer número elevado a zero é 1, e elevado a 1 é ele próprio. Observe que
neste exercício não pode ser utilizado o operador de exponenciação do portuguol (^) */

let contadora = 0
let resultado = 1
let potencias = ''

while (contadora <= 15) {
  potencias += "3 elevado a " + contadora + " é: " + resultado + "\n"
  resultado = resultado * 3
  contadora = contadora + 1
}

alert(potencias)
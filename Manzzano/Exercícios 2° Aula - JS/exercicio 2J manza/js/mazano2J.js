/*Elaborar um programa que apresente o resultado inteiro da divisão de dois números quaisquer.
Para a elaboração do programa, não utilizar em hipótese alguma o conceito do operador aritmético
DIV. A solução deve ser alcançada com a utilização de looping. Ou seja, o programa deve
apresentar como resultado (quociente) quantas vezes o divisor cabe no dividendo.*/


let dividendo
let divisor
let quociente = 0

do {
    dividendo = Number(prompt("Digite o dividendo: "))
    divisor = Number(prompt("Digite o divisor: "))

    if (divisor === 0) {
        alert("Divisão por zero não é permitida")
    } else {
        while (dividendo >= divisor) {
            dividendo -= divisor
            quociente++
        }
        alert("O resultado da divisão é: " + quociente)
    }
} while (divisor === 0)


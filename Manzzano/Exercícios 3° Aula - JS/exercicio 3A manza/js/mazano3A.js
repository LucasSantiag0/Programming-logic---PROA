/* Apresentar os quadrados dos números inteiros de 15 a 200 */

let resultados = ""

for (let numero = 15; numero <= 200; numero++) {
    let quadrado = numero * numero
    resultados += "O quadrado de " + numero + " é: " + quadrado + "\n"
}
console.log(resultados)
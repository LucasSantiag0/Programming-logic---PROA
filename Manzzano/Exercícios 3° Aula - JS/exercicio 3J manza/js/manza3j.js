//Elaborar um programa que apresente os valores de conversão de graus Celsius em Fahrenheit, de 10 em 10 graus, iniciando a contagem em 10 graus Celsius e finalizando em 100 graus Celsius. O programa deve apresentar os valores das duas temperaturas. A fórmula de conversão é 5 1609 + = C F , sendo F a temperatura em Fahrenheit e C a temperatura em Celsius.


let conversao = "Conversão de Celsius para Fahrenheit:\n"

for (let celsius = 10; celsius <= 100; celsius += 10) {
    let fahrenheit = (9 * celsius / 5) + 32
    conversao += celsius + "°C = " + fahrenheit + "°F\n"
}

alert(conversao)
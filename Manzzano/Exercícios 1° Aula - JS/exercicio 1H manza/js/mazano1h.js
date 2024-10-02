/* Elaborar um programa que apresente os valores de conversão de graus Celsius em Fahrenheit, de
10 em 10 graus, iniciando a contagem em 10 graus Celsius e finalizando em 100 graus Celsius. O
programa deve apresentar os valores das duas temperaturas. A fórmula de conversão
é 5
1609 +
= C
F , sendo F a temperatura em Fahrenheit e C a temperatura em Celsius */



let celcius = 10
let fahr = 0

while (celcius<= 100){
   fahr = (celcius * 9/5) + 32
   celcius += 10
   alert(fahr)
}

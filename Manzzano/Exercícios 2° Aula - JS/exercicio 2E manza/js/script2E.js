/*Elaborar um programa que efetue a leitura de 15 valores numéricos inteiros e no final apresente o
total do somatório da fatorial de cada valor lido*/

    let valor = 0
    let somatorioFatorial = 0
    let i = 1
  
    do {
      valor = Number(prompt("Insira o " + i + "° valor"))
  
      if (!isNaN(valor) && valor >= 0) {
        let resultado = 1
        let contar = valor
  
        do {
          resultado *= contar
          contar--
        } while (contar >= 1)
  
        somatorioFatorial += resultado
        i++
  
      } else {
        alert("Por favor, insira um número inteiro não negativo.")
      }
  
  
    } while (i <= 15) 
  
    console.log("O somatório da fatorial dos 15 valores lidos é:", somatorioFatorial)
  
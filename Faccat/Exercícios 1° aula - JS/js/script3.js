var votosBrancos = parseInt(prompt("Digite o total de votos brancos"))
var votosNulos = parseInt(prompt("Digite o total de votos nulos"))
var votosValidos = parseInt(prompt("Digite o total de votos válidos"))

var totalEleitores = votosBrancos + votosNulos + votosValidos

var percentualEleitoresBrancos = (votosBrancos * 100 / totalEleitores) 
var percentualEleitoresNulos = (votosNulos * 100 / totalEleitores) 
var percentualEleitoresValidos = (votosValidos * 100 / totalEleitores)

alert("A quantidade totais de votos é de: " + totalEleitores + ", sendo eles: " + percentualEleitoresBrancos + "% Votos brancos, " + percentualEleitoresNulos + "% Votos nulos, e " + percentualEleitoresValidos + "% Votos válidos")
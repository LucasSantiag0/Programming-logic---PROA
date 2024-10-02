let timeUm = prompt("Digite nome do time 1");
let golsTimeUm = parseFloat(prompt("Digite a quantidade de gols do time 1"));
let timeDois = prompt("Digite o nome do time 2");
let golsTimeDois = parseFloat(prompt("Digite a quantidade de gols do time 2"));


if(golsTimeUm > golsTimeDois){
    document.getElementById("texto").innerHTML = "O time " + timeUm + " foi o vencedor!"
} else if(golsTimeUm === golsTimeDois){
    document.getElementById("texto").innerHTML = "Empate!"
} else{
    document.getElementById("texto").innerHTML = "O time " + timeDois + " foi o vencedor!"
}
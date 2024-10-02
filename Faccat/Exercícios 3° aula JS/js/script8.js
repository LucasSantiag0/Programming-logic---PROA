let horaInicio = parseInt(prompt("Digite a hora de início do jogo (0-23):"));
let horaFim = parseInt(prompt("Digite a hora de fim do jogo (0-23):"));

let duracao;

if (horaInicio < horaFim) {
    duracao = horaFim - horaInicio;
} else {
    duracao = (24 - horaInicio) + horaFim;
}

document.getElementById("resultado").innerHTML = `A duração do jogo foi de ${duracao} horas.`;

const codigoCorreto = 1234;
const senhaCorreta = 9999;

let codigoUsuario = parseInt(prompt("Digite o código do usuário:"));

if (codigoUsuario !== codigoCorreto) {
    document.getElementById("texto").innerHTML = "Usuário inválido!";
} else {
    let senhaUsuario = parseInt(prompt("Digite a senha:"));

    if (senhaUsuario !== senhaCorreta) {
        document.getElementById("texto").innerHTML = "Senha incorreta.";
    } else {
        document.getElementById("texto").innerHTML = "Acesso permitido.";
    }
}
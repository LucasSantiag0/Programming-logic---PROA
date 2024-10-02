const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function fazerPergunta(pergunta) {
    return new Promise((resolve) => {
        rl.question(pergunta, (entrada) => {
            resolve(entrada.trim()); // Remove espaços em branco extras
        });
    });
}

// Função para gerar um número aleatório entre dois valores
function gerarNumeroAleatorio(min, max) {
    return Math.random() * (max - min) + min;
}

// Função para gerar um número inteiro aleatório entre dois valores
function gerarNumeroInteiroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

async function main() {
    try {
        console.log('=================================');
        console.log('====Projeto ATM PROA Equipe 02====');
        console.log('=================================');
        console.log('');

        const user = await fazerPergunta('Digite o seu usuário: ');
        console.log('Usuário recebido:', user);

        const senha = await fazerPergunta('Digite sua senha: ');
        console.log('Senha recebida:', senha);

        if (user === 'lucas' && senha === '123') {
            console.log('=================================');
            console.log('====Projeto ATM PROA Equipe 02====');
            console.log('=================================');
            console.log('');
            console.log('Seja bem-vindo Lucas');
            console.log('');
            console.log('Seja bem-vindo ao ATM Proa Equipe 02');
            console.log('');

            console.log('1 - Pix');
            console.log('2 - Saque');
            console.log('3 - Saldo');
            console.log('4 - Extrato');
            console.log('5 - Cartões');
            console.log('6 - Depósito');
            console.log('7 - Pagamento');
            console.log('8 - Empréstimos');
            console.log('9 - Transferência');
            console.log('10 - Investimentos');
            console.log('');

            const option = await fazerPergunta('Selecione uma opção: ');

            if (option === '1') {
                console.log('=================================');
                console.log('====Projeto ATM PROA Equipe 02====');
                console.log('=================================');
                console.log('');
                console.log('Você escolheu a opção: ');
                console.log('1 - Pix');
            } else if (option === '2') {
                console.log('=================================');
                console.log('====Projeto ATM PROA Equipe 02====');
                console.log('=================================');
                console.log('');
                console.log('Você escolheu a opção:');
                console.log('2 - Saque');
                console.log('Este ATM possui a disponibilidade das seguintes notas:');
                console.log('');
                console.log('R$200,00');
                console.log('R$100,00');
                console.log('R$50,00');
                console.log('R$20,00');
                console.log('R$10,00');
                console.log('R$5,00');
                console.log('R$2,00');
                console.log('');
                const valor_saque = await fazerPergunta('Digite um valor, sem vírgulas, que deseja sacar: ');
            } else if (option === '3') {
                console.log('');
                console.log('');
                console.log('=================================');
                console.log('====Projeto ATM PROA Equipe 02====');
                console.log('=================================');
                console.log('');
                console.log('Você escolheu a opção:');
                console.log('3 - Saldo');
            } else if (option === '4') {
                console.log('=================================');
                console.log('====Projeto ATM PROA Equipe 02====');
                console.log('=================================');
                console.log('');
                console.log('Você escolheu a opção:');
                console.log('4 - Extrato');
            } else if (option === '5') {
                console.log('=================================');
                console.log('====Projeto ATM PROA Equipe 02====');
                console.log('=================================');
                console.log('');
                console.log('Você escolheu a opção:');
                console.log('5 - Cartões');
            } else if (option === '6') {
                console.log('=================================');
                console.log('====Projeto ATM PROA Equipe 02====');
                console.log('=================================');
                console.log('');
                console.log('Você escolheu a opção:');
                console.log('6 - Depósito');
                console.log('');
                console.log('1) Pessoa física');
                console.log('2) Pessoa Jurídica');
                console.log('');
                const tipoconta = await fazerPergunta('Digite o tipo de conta do destinatário: ');

                if (tipoconta === '1' || tipoconta === '2') {
                    // Solicitar o tipo de conta, agência, conta, valor
                    let numeroagencia, numeroconta, numerobanco;

                    while (true) {
                        numeroagencia = await fazerPergunta('Digite o número da agência: ');
                        numeroconta = await fazerPergunta('Digite o número da conta: ');
                        numerobanco = await fazerPergunta('Digite o número do banco: ');

                        if (numeroagencia === '1234' && numeroconta === '12345' && numerobanco === '111') {
                            break; // Sai do loop se todas as condições forem atendidas
                        } else {
                            console.log('Dados incorretos, tente novamente.');
                        }
                    }

                    const confirmacao = await fazerPergunta('Deseja fazer o depósito na conta: 12345 | agência: 1234 | banco: 111? (y/n) ');

                    if (confirmacao === 'y') {
                        const valor = await fazerPergunta('Insira o valor: ');
                        console.log('O valor de R$', valor, 'foi depositado com sucesso!');
                    } else {
                        console.log('Voltando ao menu');
                    }
                } else {
                    console.log('Tipo inválido');
                }
            } else if (option === '7') {
                console.log('=================================');
                console.log('====Projeto ATM PROA Equipe 02====');
                console.log('=================================');
                console.log('');
                console.log('Você escolheu a opção:');
                console.log('7 - Pagamento');
            } else if (option === '8') {
                console.log('=================================');
                console.log('====Projeto ATM PROA Equipe 02====');
                console.log('=================================');
                console.log('');
                console.log('Você escolheu a opção:');
                console.log('8 - Empréstimo');
            } else if (option === '9') {
                console.log('=================================');
                console.log('====Projeto ATM PROA Equipe 02====');
                console.log('=================================');
                console.log('');
                console.log('Você escolheu a opção:');
                console.log('9 - Transferência');
            } else {
                console.log('=================================');
                console.log('====Projeto ATM PROA Equipe 02====');
                console.log('=================================');
                console.log('');
                console.log('Você escolheu a opção:');
                console.log('10 - Investimento');
            }
        } else {
            console.log('O usuário ou senha estão incorretos');
        }
    } catch (error) {
        console.log('Erro:', error);
    } finally {
        rl.close();
    }
}

main();

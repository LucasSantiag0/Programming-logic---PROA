let salarioMensal = parseFloat(prompt("Digite o seu salário mensal"))
let horasTrabalhadas = parseFloat(prompt("Digite o total de horas trabalhadas no mês"))
const horasRegulares = 160
let salarioHora = salarioMensal / horasRegulares
let salarioTotal
let horasTotais

if(horasTrabalhadas > horasRegulares){
    horasTotais = (horasTrabalhadas - horasRegulares)
    salarioTotal = ((horasTotais * salarioHora) * 1.5) + salarioMensal
    document.getElementById("texto").innerHTML = "O seu salário total é de: " + salarioTotal
} else{
    horasTotais = (horasRegulares - horasTrabalhadas)
    salarioTotal = (horasTotais * salarioHora) + salarioMensal
    document.getElementById("texto").innerHTML = "O seu salário total é de: " + salarioTotal
}
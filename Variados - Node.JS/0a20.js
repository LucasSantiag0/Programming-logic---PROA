function calcularSomaImpares() {
    let soma = 0;
    let i = 1;

    while (i <= 20) {
        if (i % 2 === 1) {
            console.log("O numero", i, "é impar")
        }
        i++
    }

    console.log('A somatória dos números pares de 1 a 20 é: ', soma);
}

calcularSomaImpares();

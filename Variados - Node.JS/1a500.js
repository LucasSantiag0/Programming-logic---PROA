function calcularSomaPares() {
    let soma = 0;
    let i = 1;

    while (i <= 500) {
        if (i % 2 === 0) {
            soma += i;
        }
        i++
    }

    console.log('A somatória dos números pares de 1 a 500 é: ', soma);
}

calcularSomaPares();

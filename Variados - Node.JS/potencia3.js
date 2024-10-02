function potencia3(){
    let base = 3;
    let i = 0;
    let potencia = 1

    while(i <= 15){
        potencia *= base;
        i++;
        
        console.log(`3^${i} = ${potencia}`)       

    }
}

potencia3()
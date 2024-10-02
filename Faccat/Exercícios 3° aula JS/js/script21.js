let x = parseInt(prompt("Digite o valor de X"))
let y = parseInt(prompt("Digite o valor de Y"))
let z = (x*y) + 5 

if(z <= 0){
    document.getElementById("texto").innerHTML = z + "A"
} else if(z <= 100){
    document.getElementById("texto").innerHTML = z + "B"
} else{
    document.getElementById("texto").innerHTML = z + "C"
}
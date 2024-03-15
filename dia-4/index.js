let fome = " "
let dinheiro = " "
let restaurante = " "

fome = prompt("Você está com fome? (sim/nao)")
dinheiro = prompt("Você tem dinheiro? (sim/nao)")
restaurante = prompt("O restaurante está aberto? (sim/nao)")

if(fome === "nao" || dinheiro === "nao"){
    console.log("Hoje a janta será em casa");
}else if(dinheiro === "sim" && restaurante === "sim"){
    console.log("Hoje o jantar vai ser no seu restaurante preferido!");}
else{
    console.log("Peça um delivey!");
}
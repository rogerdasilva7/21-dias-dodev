let nome = " "
let idade = " "
let cartaMotorista = false
let carro = false

nome = prompt("Qual o seu nome?")
idade = parseInt(prompt("Qual a sua idade?"))
let opcaoCarta = prompt("Você possui carta de motorista? (sim/nao)")
if (opcaoCarta === "sim"){
    cartaMotorista = true
}
let opcaoCarro = prompt("Você possui carro? (sim/nao)")
if (opcaoCarro === "sim"){
    carro = true
}
if(idade < "18" || !cartaMotorista){
    console.log(nome + ", você não pode dirigir!")
} else if (idade >= "18" && cartaMotorista && !carro){
    console.log(nome + ", você pode dirigir mas não tem carro")
} else{
console.log(nome + ", você será o motorista!")
}
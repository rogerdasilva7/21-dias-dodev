//Declarando valores para as variáveis
let nomeUsuario = " "
let idadeUsuario = 0
let alturaUsuario = 0
let pesoUsuario = 0



//Solicitando informações ao usuário e atribuindo os valores as variaveis
nomeUsuario = prompt("Digite seu nome!")
idadeUsuario = parseInt(prompt("Digite sua idade!"))
alturaUsuario = parseFloat(prompt("Digite sua altura!"))
pesoUsuario = parseInt(prompt("Digite seu peso!"))



//Calculando o nascimento e o IMC do usuário
let anoNascimento = 0
anoNascimento = 2023 - idadeUsuario

let imc = 0
imc = Number pesoUsuario / (alturaUsuario * alturaUsuario)



//Exibindo informações no console
console.log(" Olá " + nomeUsuario + " você tem " + idadeUsuario + " anos, nasceu em " + anoNascimento + "," + " tem " + alturaUsuario + " de altura, pesa " + pesoUsuario +"kg" + " e seu IMC é " + imc + "Kg/m2 ")
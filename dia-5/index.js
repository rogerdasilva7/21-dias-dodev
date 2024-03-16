let valor1 = parseInt(prompt("Digite um valor:"))
let valor2 = parseInt(prompt("Digite outro valor:"))
let opcaoCalculo = parseInt(prompt("Escolha a operação que deseja realizar:" + "\n1 = + ; \n2 = - ; \n3 = * ; \n4 = /"))

switch(opcaoCalculo){
    case 1:
        console.log(valor1 + " + " + valor2 + " = " + (valor1 + valor2))
        break;
    case 2:
        console.log(valor1 + " - " + valor2 + " = " + (valor1 - valor2))
        break;
    case 3:
        console.log(valor1 + " * " + valor2 + " = " + (valor1 * valor2))
        break;
    default:
        console.log(valor1 + " / " + valor2 + " = " + (valor1 / valor2))
        break;
}
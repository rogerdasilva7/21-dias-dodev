let opcoesPosto = prompt("Escolha uma das três opções:" + "\n1 - abastecer com gasolina; \n2 - alcool ou \n3 - calibrar os pneus?")
let valor 
let quantidade
switch(opcoesPosto){
    case "1":
        valor = parseInt(prompt("Digite o valor desejado para abastecer"))
        quantidade = valor / 5
        console.log("Foram abastecidos " + quantidade + "L de gasolina")
        break;
    case "2":
        valor = parseInt(prompt("Digite o valor desejado para abastecer"))
        quantidade = valor / 3
        console.log("Foram abastecidos " + quantidade + "L de gasolina")
        break;
    default:
        console.log("Pneus calibrados com sucesso!")
        break;
        }


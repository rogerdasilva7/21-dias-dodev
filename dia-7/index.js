let mediageral = 0
let qtdHomens = 0
let qntMulheresAcimaDe7 = 0
let maiorNotaHomens = 0
let contador = 1

while(contador <= 10){
    nota = parseInt(prompt("Digite a nota do " + contador + "° aluno"))
    sexo = prompt("Digite o sexo do aluno: (m/f)")

    if(sexo == "m"){
        if(nota > maiorNotaHomens){
            maiorNotaHomens = nota
        }
    qtdHomens++
    }

    if(sexo == "f" && nota > 7){
        qntMulheresAcimaDe7++
    }

mediageral += nota
contador++
}

mediageral = mediageral / 10

console.log("A media geral dos alunos é " + mediageral)
console.log("A quantidade de homens que enviaram as notas foram " + qtdHomens)
console.log("A quantidade de mulheres que tiveram nota acima de 7 foram " + qntMulheresAcimaDe7)
console.log("A maior nota entre os homens foi " + maiorNotaHomens)
let num1 = Number(prompt("Digite um numero inteiro e positivo"))

for(let i = num1; i <= num1 + 2; i++){
    console.log("tabuada do número: " + i)
    
    for(let j = 0; j <= 10; j++){
        console.log(i + " x " + j + " = " + i * j)
    }
}
    
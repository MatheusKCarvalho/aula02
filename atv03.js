/* 
Escreva um programa que leia o salário de um funcionário e 
aplique um aumento de acordo com a seguinte regra: salários menores 
que R$1000 recebem 20% de aumento, entre R$1000 e R$2000 recebem 15%, e 
acima de R$2000 recebem 10%.
*/

var salario = 2001
var salarioAumento = 0

if(salario >= 1000) {
    if (salario <= 2000){
        salarioAumento = (salario * 0.15) + salario
        console.log("Você vai passar a receber " + salarioAumento)
    }else {
        salarioAumento = (salario * 0.10) + salario
        console.log("Você vai passar a receber " + salarioAumento) // entre isso e isso
    }
}else {
    salarioAumento = (salario * 0.20) + salario
    console.log("Você vai passar a receber " + salarioAumento)
}

//se for menor que 1000 20%, entre 1000 e 200
//
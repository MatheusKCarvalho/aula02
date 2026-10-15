// crie um programa que leia 3 numeros e determine qual é o maior

var numero1 = 24
var numero2 = 21
var numero3 = 22

if (numero1 > numero2){
    if(numero1 > numero3){
        console.log("O numero: " + numero1 + " é o maior")
    }
}

if (numero2 > numero1){
    if(numero2 > numero3){
        console.log("O numero: " + numero2 + " é o maior")
    }else {console.log("O numero: " + numero3 + " é o maior")}
}

//preciso ver se o numero um é maior que o numero2,e se o numero 1 é
//maior que o numero 3 se n for  maior que nem um dos 3 ai é ele, e
//faz isso pelos demais
//
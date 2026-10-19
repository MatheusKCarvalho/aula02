// 10. Escreva um programa que leia uma data (dia, mês, ano) e verifique se é uma data válida.
var dia = 31
var mes = 12
var ano = 99
 
if (ano >= 1000){    
    if (mes >= 1){
        if(mes <= 12){
            if (mes == 2){
                if (dia >= 1){
                    if (dia <= 28){
                        console.log("data está valida")
                    }else {console.log("data invalida")}
                }
            }else {
                if (dia >= 1){
                    if (dia <= 30){
                        console.log("data está valida")
                    }else {console.log("data invalida")}
                }
            }
 
        }else {console.log("data invalida")}
    }else {console.log("data invalida")}
 
}else {console.log("data invalida")}
'use strict'

//Programa que muestre todos los numeros impares que estén
//entre 2 numeros introducidos por el teclado

var num1=parseInt(prompt("Introduce el primer numero:", num1));
var num2=parseInt(prompt("Introduce el segundo numero:", num2));

while(num1<num2){
    num1++;

    if(num1%2 !=0){
        document.write("El numero" + num1 +" es impar </br>");
    }
}
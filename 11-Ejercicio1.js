'use strict'

/*Programa que pida dos numeros y que nos diga cual es el mayor y si son iguales*/

var numero1= parseInt(prompt("Ingresa primer numero", numero1));
var numero2= parseInt(prompt("Ingresa el segundo número", numero2));

while(numero1<=0 || numero2<=0 || isNaN(numero1) ||isNaN(numero2)){
    numero1= parseInt(prompt("Ingresa primer numero", numero1));
    numero2= parseInt(prompt("Ingresa el segundo número", numero2));
}
if(numero1==numero2){
    alert("Son iguales!");
}else if(numero1>numero2){
    alert(numero1 + " es el mayor"+ numero2 + " es el menor");
}else if(numero2>numero1){
    alert(numero2 + " es el mayor" + numero1 +" es el menor");
}else{
    alert("Introduce numeros validos!");
}
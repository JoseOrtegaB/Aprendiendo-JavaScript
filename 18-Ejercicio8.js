'use strict'
/*HACER UNA CALCULADORA QUE PIDA 2 NUMEROS 
SI SE INTRODUCE UNO MAL QUE NOS VUELVA A PEDIR
EN EL CUERPO DE LA PAGINA EN UNA ALERTA Y POR LA CONSOLA EL RESULTADO DE
SUMAR, RESTAR, MULTIPLICAR Y DIVIDIR ESAS DOS CIFRAS
*/

var num1=parseInt(prompt("Primer numero: ", num1));
var num2=parseInt(prompt("Segundo numero: ", num2));

while(isNaN(num1) || isNaN(num2)){
    num1=parseInt(prompt("Primer numero: ", num1));
    num2=parseInt(prompt("Segundo numero: ", num2)); 
}

var resultado = "La suma es: " + (num1+num2) + "<br/>"+
                "La resta es:" + (num1-num2) + "<br/>"+
                "La multiplicación es: "+ (num1*num2) + "<br/>"+
                "La división es: "+ (num1/num2) + "<br/>";

var resultadoCMD = "La suma es: " + (num1+num2) + "\n"+
                "La resta es:" + (num1-num2) + "\n"+
                "La multiplicación es: "+ (num1*num2) + "\n"+
                "La división es: "+ (num1/num2) + "\n";
document.write(resultado);
alert(resultadoCMD);
console.log(resultadoCMD);
'use strict'

/*hacer un programa que muestre todos los numeros
entre 2 numeros introducidos por el usuario*/

var primerNumero = parseInt(prompt("Escribe el primer numero", primerNumero));;
var segundoNumero = parseInt(prompt("Escribe el segundo numero", segundoNumero));;

document.write("<h1>De "+primerNumero+" hasta "+segundoNumero+" están los números:/<h1>")
for(var i= primerNumero; i<=segundoNumero;i++){
    document.write(i+"<br/>");
}

for(var i= primerNumero; i>=segundoNumero;i--){
    document.write(i+"<br/>");
}



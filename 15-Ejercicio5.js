'use strict'

/*UN PROGRAMA QUE IMPRIMA TODOS LOS DIVISORES DE UN NUMERO EN TECLADO*/

var num = parseInt(prompt("Intruzca un numero:", num));
document.write("Sus divisores son: <br/>");

for(var contador=1;contador<=num;contador++){
    if( num%contador == 0){
        document.write( contador + "<br/>");
    }
}
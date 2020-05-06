'use strict'

/*UN PROGRAMA QUE INDIQUE QUE UN NUMERO ES PAR O IMPAR*/

var numero = parseInt(prompt("Ingresa un numero", numero));

while(isNaN(numero)){
    numero=parseInt(prompt("Intruduce un numero", numero));
}
if(numero%2 == 0){
    document.write("El numero es par!");
}else{
    document.write("El numero es impar!");
}



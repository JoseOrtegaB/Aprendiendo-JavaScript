'use strict'
/*Usando un bucle mostrar la media y la suma de los resultados
hasta que el usuario meta un numero negativo*/

var suma =0;
var contador=0;

do{
    var numero=parseInt(prompt('Introduce numeros positivos para terminar introduce uno negtivo', numero));

    if(isNaN(numero)){
        numero=0;
    }else if(numero >=0){
        suma += numero;
        contador++;
    }
    console.log(suma);
    console.log(contador);
}while(numero >= 0)
alert("La suma de los numeros es "+ suma);
alert("La media de todos los numeros es "+ (suma/contador));






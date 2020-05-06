'use strict'

/*Hacer la tabla de multiplicar de un numero introducido por pantalla */

var numero=parseInt(prompt("ingrese un numero", numero));

document.write("<h1>TABLAS DE MULTIPLICAR</h1>");
for(var i=1;i<=10;i++){
    document.write(i+"x"+numero+" = " + (numero*i)+"<br/>");
}

//TODAS LAS TABLAS

for(var c=1;c<=10;c++){
    document.write("<h1>TABLA DEL"+c+"</h1>");
    for(var i=1;i<=10;i++){
        document.write(i+"x"+c+" = " + (i*c)+"<br/>");
    }
}
'use strict'

/*DEFINIR UNA FUNCIÓN

function calculadora(numero1, _numero2, _mostrar = false)
{/*
    console.log("Suma " + (numero1 + _numero2));
    console.log("resta " + (numero1 -_numero2));
    console.log("multiplicacion " + (numero1 * _numero2));
    console.log("division " + (numero1 / _numero2));
    console.log("************************************");
}

for(var i=1;i<=10;i++){
    console.log(i);
    calculadora(i,8);
} 

//EXISTE TAMBIEN LO QUE SE DENOMINA COMO PARAMETROS OPCIONALES
//LOS CUALES NO ES OBLIGATORIO ANOTAR SU VALOR PARA QUE SE EJECUTE UNA INSTRUCCION//

if(_mostrar==false){
    ;
}else{
    document.write("Suma " + (numero1 + _numero2)+"<br/>");
    document.write("resta " + (numero1 -_numero2)+"<br/>");
    document.write("multiplicacion " + (numero1 * _numero2)+"<br/>");
    document.write("division " + (numero1 / _numero2)+"<br/>");
    document.write("************************************"+"<br/>");
}}

/*Tampoco es necesario tener dentro de un bloque de instrucciones todo junto
Se puede separar en funciones mas pequeñas el conjunto de codigo para que quede
mas organizado y de acuerdo al tipo de actividad que hace cada función*/

function porConsola(numero1, _numero2, mostrar=false){
    console.log("Suma " + (numero1 + _numero2));
    console.log("resta " + (numero1 -_numero2));
    console.log("multiplicacion " + (numero1 * _numero2));
    console.log("division " + (numero1 / _numero2));
    console.log("************************************")
}

function porPantalla(numero1, _numero2, _mostrar=false){
    document.write("Suma " + (numero1 + _numero2)+"<br/>");
    document.write("resta " + (numero1 -_numero2)+"<br/>");
    document.write("multiplicacion " + (numero1 * _numero2)+"<br/>");
    document.write("division " + (numero1 / _numero2)+"<br/>");
    document.write("************************************"+"<br/>");
}


calculadora(1,4);
calculadora(2,5,true);
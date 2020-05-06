'use strict'

//Funciones anoonimas: Es un conjunto de  instrucciones que no tienen nombre
//y se pueden guardar dentro de una variable
//se usa para hacer un callback
//Es una funcion dentro de una funcion, se ejecuta una y luego la otra
//Se utiliza mucho en jquery y en muchos frameworks de desarrollo con javascript

function sumame(numero1, numero2, sumaYmuestra, sumaPorDos){
    var sumar = numero1 + numero2;

    sumaYmuestra(sumar);
    sumaPorDos(sumar);

    return sumar;
}

sumame(5, 7, function(dato){
    console.log("La suma es:", dato);
},
function(dato){
    console.log("La suma es:", dato*2);
});

//************************
//Otra forma de implementar funciones son las que de conocen como
//FUNCIONES FLECHA en las que se sustituye la palabra function por una flecha y se eliminan 
//los parentesis cuando hay parametros de por medio

function sumame(numero1, numero2, sumaYmuestra, sumaPorDos){
    var sumar = numero1 + numero2;

    sumaYmuestra(sumar);
    sumaPorDos(sumar);

    return sumar;
}

sumame(5, 7, dato -> {
    console.log("La suma es:", dato);
},
function dato->{
    console.log("La suma es:", dato*2);
});
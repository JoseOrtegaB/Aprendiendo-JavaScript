'use strict'

//Pruebas con let y var

//Prueba con Var

var numero=40;
console.log(numero);//valor 40

if(true){
    var numero=50;//valor 50
    console.log(numero);
}

console.log(numero);

//Prueba con let
var texto ="Curso JS joseOrtega";
console.log(texto);

if(true){
    let texto =("Curso laravel 5 Ortega José");
    console.log(texto);
}

console.log(texto);

'use strict'

//Parametros REST Y SPREAD

function listadoFrutas(fruta1, fruta2, ...resto_frutas)
{
    console.log("FRUTA 1:", fruta1);
    console.log("FRUTA 2:", fruta2);
    console.log(resto_frutas);
}

//rest
listadoFrutas("Narnaja","Manzana","Sandia","Pera","Melon","Coco");
//spread
var frutas=["Narnaja","Manzana"];
listadoFrutas( ...frutas,"Sandia","Pera","Melon","Coco");

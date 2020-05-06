'use strict'

//WHILE ES MENOS ESTRICTO O INDEFINIDO 

var year= 2018;
while(year<=2051){
    //ejecuta
    console.log("Estamos en el año:"+ year);
    
    if(year ==2025){
        break;
    }

    year++;
}
var years=30;
do{
    alert("Solo cuando sea diferente de 20");
    years--;
}while(years >25);
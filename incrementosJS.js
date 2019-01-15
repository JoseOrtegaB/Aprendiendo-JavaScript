//let puntaje = 0;
//console.log(puntaje);

/*let numero1 = 50,
    numero2 = "10",
    numero3 = "tres",
    numero4 = "20.20";

  console.log(numero1+numero2);
  console.log(Number(numero2)+numero1);
  console.log(parseFloat(numero4)+Number(numero2));*/
//Conversion a numeros
  let dato;
  dato = Number("20");
  dato = Number(true);
  dato = Number(false);
  dato = Number(null);

  console.log(dato);

//To fixed: se utiliza solo en numeros, ayuda a quitar decimales
//o bien utilizar el numero de decimales deseados

let numero1 = 12838484.94858;
let numero2 = "37475769.97578";

console.log(Number(numero2).toFixed(3));//aqui aplica usar 3 numeors decimales

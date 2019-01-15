//Crear un arreglo

const numeros =[10, 20, 30, 40, 50];

console.table(numeros);

const meses = ['enero', 'febrero', 'marzo'];

//agrega elementos al final del arreglo
meses.push('abril');
meses.push('mayo');
//agrega elementos al principio del arreglo
meses.unshift('Mes0');
//elimina al final de arreglo
meses.pop();
//elminar al principio del arreglo
meses.shift();

//cambiar el orden
meses.reverse();
console.table(meses);

let frutas =['platano', 'naranja', 'uva', 'fresa'];
frutas.sort();

console.log(frutas);

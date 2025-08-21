/* let arreglo = [23, 5, 63, 9, 3, 88];

console.log(arreglo[1]);

for (let i = 0; i < arreglo.length; i++) {  // Este for va a recorrer todo el arreglo devolviendome todo los valores que tiene el array
    
    const element = arreglo[i];
    
    console.log(element);
    
} */





/* crear o definir un array vacio de forma literal */

let arreglo = []; // aqui estamos declarando un arreglo vacio de forma literal


/* Crear un aaray con datos de forma literal */

let series = [`Naruto`, `Juego de tronos`, 3, 4, true]

console.log(series[1]);





/* Defini un array vacio usando el constructor de array (no literal) */

let array = new Array();



/* Definir un array con datos usando el constructor de arrays (no literal) */

let array2 = new Array(1, 2, 5, 8);

console.log(array2);



/* Obtener o mostrar un elemento del array  */

// [entre corchetes pongo la posicion del elemento que quiero mostrar]

let array3 = [1, 2, 3];

console.log(array3[1]); 


/* Como mostrar la cantidad de elementos que tiene el array */

let array4 = [4, 2, 3]

console.log(array4.length);


/* Obtener el último elemento del array */

console.log(array4.length -1); //ver no esta bien


/* Reasignar el valor a cualquier elemento */

let num = 4;

num = 5;

// ahora para el caso de un array

array3[0] = 4;

console.log(array3);


/* Cuando quiero agregar un valor para el array */

let array5 = [1, 2, 3, 5];

array5[5] = `Hola`;

console.log(array5);


/* Agregar elemento a la ultima posicion */

// .push() agregar un elemento a la última posición. Este es un "METODO"

array5.push(`Chau`)

console.log(array5);


/* Agregar o sacar el último elemento del array */

// .pop()  nos saca el último elemento del array. Este es un "METODO"

array5.pop()

console.log(array5);


/* Agregar en la primera posición */

array5.unshift(15);

console.log(array5);


/* Eliminar elemento de la 1° posición */

array5.shift()

console.log(array5);


/* Agregar elementos en una determinada posición */

// .splice() eliminar o reemplazar un elemento; (posicion, cantidad que quiero eliminar, valor que quiero poner para reemplazar)

array5.splice(1, 1,"febrero");

console.log(array5);


/* Eliminar elementos desde una determinada posición */

// .splice() eliminar o reemplazar un elemento; (posicion, cantidad que quiero eliminar, valor que quiero poner para reemplazar)

array5.splice(1)  // es decir borra desde la posición 1 inclusive todo lo de ahi en adelante

console.log(array5);


array5.splice(1, 0, 3, 4, 5, 10)

console.log(array5);



/* Seleccionar elementos de un array */

let array6 = [2, 20, 200];

console.log(array6.slice(1, 3));


/* Ejercicio 1 de clase */
/* 
let arrayMeses = ["Enero", "Febrero", "Marzo",
     "Abril", "Mayo", "Junio", "Julio", "Agosto",
      "Septiembre", "Octubre", "Noviembre", "Diciembre"];



document.writeln();
*/



/* Repaso */

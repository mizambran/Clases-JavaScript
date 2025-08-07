/* console.log("Hola Mundo") */
/* tipos de variables */

/* var num = 7; */ /* variable mutable, scope global, no respeta bloque {} */

/* let num1 = 9; */ /* variable mutable pero scope es local, es decir respeta el bloque {} */

/* const pi = 3.1416; */ /* Variable no es mutable (ejemplo pi:es un valor matematico fijo), scope local, no se permite su reasignacion */

/* ejemplo diagrama "suma" */

/* let num1 = 11;

let num2 = -12;

let suma = num1 + num2;

console.log(`El resultado de la suma de ${num1} y ${num2} es ${suma}`) /* esto hace que se imprima en consola */


/* ahora con el promp para que el usuario ingrese los valores */

let num1 = parseInt(prompt(`Ingrese un numero`)); 

let num2 = parseInt(prompt(`ingrese otro numero`));

let suma = num1 + num2;

document.writeln(`El resultado de la suma de ${num1} y ${num2} es ${suma}`); /* este hace que se vea en la pagina */
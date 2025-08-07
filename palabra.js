/* programa para pedir una palabra y que nos devuelva las vocales */

/* utilizando las propiedad o metodos length , subString()  */

let palabra = prompt("Ingrese una palabra de 6 caracteres").toLowerCase(); // la funcion ".toLowerCase" los convierte en minuscula a todas las mayusculas que ingresa el usuario ; y ".toUpperCase" los convierte en mayuscula

console.log(palabra.length); // nos da la cantidad de caracteres que tiene el texto

console.log(palabra.substring); // le estamos indicando la posicion desde la que queremos analizar (desde y hasta) y SIEMPRE se empieza por 0

console.log(palabra.charAt); // nos dicen que caracter esta en esa posición

if (
  palabra.charAt(0) === "a" ||
  palabra.charAt(0) === "e" ||
  palabra.charAt(0) === "i" ||
  palabra.charAt(0) === "o" ||
  palabra.charAt(0) === "u"
) {
  document.writeln(palabra.charAt(0));
}

if (
  palabra.charAt(1) === "a" ||
  palabra.charAt(1) === "e" ||
  palabra.charAt(1) === "i" ||
  palabra.charAt(1) === "o" ||
  palabra.charAt(1) === "u"
) {
  document.writeln(palabra.charAt(1));
}

if (
  palabra.charAt(2) === "a" ||
  palabra.charAt(2) === "e" ||
  palabra.charAt(2) === "i" ||
  palabra.charAt(2) === "o" ||
  palabra.charAt(2) === "u"
) {
  document.writeln(palabra.charAt(2));
}

if (
  palabra.charAt(3) === "a" ||
  palabra.charAt(3) === "e" ||
  palabra.charAt(3) === "i" ||
  palabra.charAt(3) === "o" ||
  palabra.charAt(3) === "u"
) {
  document.writeln(palabra.charAt(3));
}

if (
  palabra.charAt(4) === "a" ||
  palabra.charAt(4) === "e" ||
  palabra.charAt(4) === "i" ||
  palabra.charAt(4) === "o" ||
  palabra.charAt(4) === "u"
) {
  document.writeln(palabra.charAt(4));
}

if (
  palabra.charAt(5) === "a" ||
  palabra.charAt(5) === "e" ||
  palabra.charAt(5) === "i" ||
  palabra.charAt(5) === "o" ||
  palabra.charAt(5) === "u"
) {
  document.writeln(palabra.charAt(5));
}

if (
  palabra.charAt(6) === "a" ||
  palabra.charAt(6) === "e" ||
  palabra.charAt(6) === "i" ||
  palabra.charAt(6) === "o" ||
  palabra.charAt(6) === "u"
) {
  document.writeln(palabra.charAt(6));
}

if (
  palabra.charAt(7) === "a" ||
  palabra.charAt(7) === "e" ||
  palabra.charAt(7) === "i" ||
  palabra.charAt(7) === "o" ||
  palabra.charAt(7) === "u"
) {
  document.writeln(palabra.charAt(7));
}


// ESTO ES LO MISMO QUE ESTA ARRIBA

/* let palabra = prompt("Ingrese una palabra de 6 caracteres").toLowerCase();

for (let caracter = 0 ; caracter <= palabra.length ; caracter ++) {
    if (
        palabra.charAt (caracter) === "a" ||
        palabra.charAt (caracter) === "e" ||
        palabra.charAt (caracter) === "i" ||
        palabra.charAt (caracter) === "o" ||
        palabra.charAt (caracter) === "u"
    ) {
        document.writeln(palabra.charAt(caracter));
    }
} */

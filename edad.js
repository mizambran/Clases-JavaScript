/* Pasos del Algoritmo - Este sería pseudocodigo    
    1. Inicio
    2. Ingrese su edad.
    3. Es mayor de 18 años?
    4. Muestra un mensaje si es mayor de edad.
    5. Si no es mayor de edad que muestre un mensaje
    6. Fin */

let edad;

edad = parseInt(prompt("Ingrese su edad"))

/* opcion 1 - operacion normal */
/* if (edad >= 18) {
    document.writeln("Eres mayor de edad")
} else {
    document.writeln("Eres menor de edad")
} */  /* este codigo se lo puede reemplazar con un operador ternario */

/* opción 2 - operador ternario */

let mensaje = (edad >= 18) ? 'Eres mayor de edad' : 'Eres menor de edad'

document.writeln(mensaje)



/* condicionales anidados utilizamos swich */
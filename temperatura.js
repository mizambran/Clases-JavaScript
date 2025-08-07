/* si la temperatura es mayor a 30grados hace calor
si es mayor o igual a 30grados es agradable
si es contraria hace frio

1. inicio

*/

let temperatura;

temperatura = parseInt(prompt("Ingresa la temperatura"))

if (temperatura >= 30) {
    document.writeln("Hace mucho calor!")
} else if (temperatura >= 20) {
    document.writeln ("Es un clima agradable")
} else {
    document.writeln ("Hace mucho frio!")
}   /* esto es recomendable hasta 3 casos, sino ya tendría que utilizar un swich */

 

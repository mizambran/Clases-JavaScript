/* 
Descripción: Crea un programa que calcule la propina a dejar en un restaurante basado en el total de la cuenta y el porcentaje de propina deseado.

Requisitos:

Pedir al usuario que ingrese el total de la cuenta.
Pedir al usuario que ingrese el porcentaje de propina que desea dejar.
Calcular la cantidad de propina.
Calcular el total a pagar incluyendo la propina.
Imprimir la propina y el total a pagar.
*/

let totalDeLaCuenta;

let porcentajePropina;

let propina;

let totalAPagar;

totalDeLaCuenta = parseInt(prompt("Ingresa el total de la cuenta"));

document.writeln(`Total de la cuenta ${totalDeLaCuenta}`)

porcentajePropina = parseInt(prompt("Del total de la cuenta, ¿Qué porcentaje quieres dejar?"));

if (porcentajePropina >= 0) {
    propina = totalDeLaCuenta * (porcentajePropina / 100);
} else {
    "No dejaste propina"
}
document.writeln(`propina es ${propina}`);

if (propina >= 0) {
    totalAPagar = totalDeLaCuenta + propina ;
} else {
    totalAPagar
}; 
document.writeln(`El total a pagar es ${totalAPagar}`)
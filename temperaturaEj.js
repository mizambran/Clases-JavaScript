/* 
Descripción: Crea un programa que convierta una temperatura de grados Celsius a grados Fahrenheit.

Requisitos:

Pedir al usuario que ingrese una temperatura en grados Celsius.
Convertir la temperatura a grados Fahrenheit usando la fórmula: F=C×9/5+32
Imprimir la temperatura en grados Fahrenheit.
*/

let temperaturaCelsius;

let temperaturaFahrenheit;

temperaturaCelsius = parseInt(prompt("Ingresa la temperatura en °C"));

temperaturaFahrenheit = ((temperaturaCelsius * 9) / 5) + 32 ; 

document.writeln(`Cuando la temp es ${temperaturaCelsius}°C la temp ${temperaturaFahrenheit}°F`)
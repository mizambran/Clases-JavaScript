
// Ejercicio 4

/* let contraseñaGuardada;

let contraseña;

contraseñaGuardada = "M@Z2025";

contraseña = prompt("Ingresa la contraseña");

if (contraseña === contraseñaGuardada) {
    alert("Acceso concedido")
} else {
    alert("Error, ingresar nuevamente!")
} ; */


// Ejercicio 5

/* let num1 = parseInt(prompt("Ingresa el 1° Valor"));

let num2 = parseInt(prompt("Ingresa el 2° Valor"));

let num3 = parseInt(prompt("Ingresa el 3° Valor"));

let mayor = Math.max(num1, num2, num3) ;

console.log(mayor);
 */ 



// Ejercicio 7

/* Un año es bisiesto si es divisible por 4, a menos que también sea divisible por 100 pero no por 400.
 Por ejemplo, 2020 fue un año bisiesto porque es divisible por 4. 2100 no será un año bisiesto porque, aunque es divisible por 4, también es divisible por 100 y no es divisible por 400. 
*/

/* let año = parseInt(prompt("Ingresa el año para saber si es bisiesto"))

let mensaje;

if ((año % 4 === 0 && año % 100 !== 0) || año % 400 === 0) {
    alert(`El año que ingresaste es BISIESTO`)
} else {
    alert("El año que ingresas NO es bisiesto")
};


 */




// Ejercicio 8

/* let nota = parseInt(prompt("Ingresa una calificación del 1 al 10"));

switch (true) // aqui switch evalua la expresión "TRUE" por lo tanto va a ejecutar el primer bloque de codigo que sea verdadero.. Es decir que si el usuario ingresa "9" se ejetara el tercer bloque de codigo "Excelente!"
 {
    case (nota >= 0 && nota < 6):
        alert("Reprobado")
        break;
    
    case (nota >= 6 && nota < 8):
        alert("Aprobado!")
        break;

    case (nota >= 8 && nota <= 10):
        alert("Excelente!!")
        break;

    default:
        alert("Ingresa una calificación valida.")
        break;
}; */



// Ejercicio 9

/* let compra = parseFloat(prompt("Ingresa el monto total de la compra"));

let aPagar;

if (compra > 100) {
    
    aPagar = compra - (compra * (10 / 100));

    document.writeln(`El monto de tu compra es $${compra} se aplico un descuento de 10%, el total a pagar es $${aPagar}`)
} else {
    aPagar = compra;

    document.writeln(`El monto de tu compra es $${compra} no se aplicaron descuentos, el total a pagar es $${aPagar}`)
} */



// Ejercicio 10

/* let usuarioGuardado = "miguel2430";

let contraseñaGuardada = "Mi@ngel";

let usuario = prompt("Ingresa tu usuario");

let contraseña = prompt("Ingresa tu contraseña");

if (usuario === usuarioGuardado && contraseña === contraseñaGuardada) {
    alert("Usuario y Contraseña correctos!")
} else {
    alert("Algunos datos no fueron ingresados correctamente, intente de nuevo!")
} */



// Ejercicio 11 



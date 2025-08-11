
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

/* INTERMEDIO */

// Ejercicio 1 

/* let edad = parseInt(prompt("Ingresa tu edad"));

switch (true) {
    case (edad >= 0 && edad < 12):
        alert("Eres un niño")
        break;

    case (edad >= 12 && edad < 18):
        alert("Adolescente");
        break;

    case (edad >= 18 && edad < 50):
        alert("Adulto!")
        break;

    case (edad >= 50):
        alert("Adulto Mayor!!")
        break;

    default:
        alert("Ingresa una edad valida!!")
        break;
} */



// Ejercicio 3

/* let usuarioGuardado = "Miki"

let usuario = prompt("Ingresa tu usuario");

let rol = prompt("Ingresa el rol (admin, editor, invitado?)");

switch (true) {
    case (usuario === usuarioGuardado && rol === "admin"):
        alert("Acceso concedido")
        break;
    
    case (usuario !== usuarioGuardado && rol === "admin"):
        alert("Error con el usuario")
        break;
        
    case (usuario === usuarioGuardado && rol !== "admin"):
        alert("Acceso denegado, cambiar rol!")
        break;
        
    default:
        alert("Error con usuario y rol. NO SEA QL")
        break;
}
 */


// Ejercicio 4
/* 
let ingresos = parseInt(prompt("Ingresa tu sueldo y te digo cuanto vas a pagar de Impuestos"))

let impuestos = 5;

switch (true) {
    case (ingresos < 1000 && ingresos > 0):
        impuestos = (ingresos * (impuestos / 100))
        document.writeln(`Tu sueldo es menor a $1000 por lo tanto tenes que pagar de impuestos $${impuestos}`)
        break;

    case (ingresos >= 1000 && ingresos < 5000):
        impuestos = (ingresos * (impuestos / 100))
        document.writeln(`Tu sueldo se encuentra en el rango de $1000 y $5000. Por lo tanto vas a pagar $${impuestos} de impuestos.`)    
        break;

    case (ingresos > 5000):
        impuestos = (ingresos * (impuestos / 100))    
        document.writeln(`Tu sueldo es superior a $5000, por lo tanto vas a pagar $${impuestos} de impuestos.`)
        break;

    default:
        alert("Error, ingresar nuevamente.")
        break;
}
 */


// Ejercicio 5 - Conversión temperatura


/* 
    ingresar "C" o "F"; luego evaluar si tiene fibre o no 


*/
/* 
let tipoTemperatura = prompt("La temperatura es °C o °F ?. Ingresa solo la inicial F o C..").toUpperCase();

let temperatura = parseFloat(prompt("Ingresa la temperatura"));

let conversion;

switch (true) {
    case (tipoTemperatura === "C" && temperatura == 36.5 || temperatura <= 37.5):
        conversion = ((temperatura * (9 / 5)) + 32).toFixed(2); 
        document.writeln(`Como ingresaste °C, tu temperatura es ${conversion}°F. Tienes una temperatura corporal normal!`)
        break;

    case (tipoTemperatura === "C" && temperatura > 37.5 ):
        conversion = ((temperatura * (9 / 5)) + 32).toFixed(2);
        document.writeln(`Como ingresaste °C, tu temperatura es ${conversion}°F. Tienes Fiebre!!, anda a un dotor chang@`)
        break;

    case (tipoTemperatura === "C" && temperatura < 36.5 ):
        conversion = ((temperatura * (9 / 5)) + 32).toFixed(2);
        document.writeln(`Como ingresaste °C, tu temperatura es ${conversion}°F. Tienes Hipotermia`);
        break;

    case (tipoTemperatura === "F" && temperatura == 97.7 || temperatura <= 99.5):
        conversion = ((temperatura - 32) / (9 / 5)).toFixed(2);
        document.writeln(`Ingresaste °F, tu temperatura es ${conversion}°C. Tienes una temperatura corporal normal.`)

    case (tipoTemperatura === "F" && temperatura > 99.5):
        conversion = ((temperatura - 32) / (9 / 5)).toFixed(2);
        document.writeln(`Ingresaste °F, tu temperatura es ${conversion}°C. Teni fiebre chango!!`);

    case (tipoTemperatura === "F" && temperatura < 97.7):
        conversion = ((temperatura - 32) / (9 / 5)).toFixed(2);
        document.writeln(`Ingresaste °F, tu temperatura es ${conversion}°C. Tienes hipotermia!!`);

    default:
        break;
} 
 */

/*  VER EJERCICIO ANTERIOR */


// EJERCICIO 6


/* do {

    let numAleatorio = Math.floor(Math.random() * 10) + 1 ;

    let numUsuario = parseInt(prompt("Ingresa un número"));


    if (numUsuario === numAleatorio) {
    
        alert(`FELICIDADES!!!! El numero ingresado es ${numUsuario} y el número aleatorio es ${numAleatorio}`)
    
    } else {
        alert(`Segui participando! ingresado ${numUsuario} y aleatorio ${numAleatorio}`)  
    } 

} while (confirm("Intentar de nuevo?"));
 */





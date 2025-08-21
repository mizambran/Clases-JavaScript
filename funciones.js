/* Funcion  es una estructura que aisla una porcion de codigo que queremos tener, una accion que puedo llamar cuando la necesite */

// Funcion declarativa - la mas usada por principiantes


 
function saludar() {
    return "Hola";
}

console.log(saludar());

// ejemplo

function saludarPersona(nombre, apellido){
    console.log(`Hola ${nombre}, ${apellido}`);
}

saludarPersona("Juan", "Perez")



//


// Funcion por anonima - en esta tengo que declarar la variable y luego inicializarla y no tiene nombre la función porque ya tome nombre de la variable

const saludo = function () {
    return "Hola";
}

console.log(saludo());

// COMO BUENA PRACTICA USAR EL "const" PARA ARREGLOS Y FUNCIONES;




// Funciones que retornan un valor 

 /* function sumar(num1, num2) {
    let resultado = num1 + num2;

    console.log(resultado);
    return resultado  // return va en la ultima linea de codigo de la funcion
}  */

sumar (45, 50);


// otra forma de hacerlo es directo en return 

function sumar(num1, num2) {
    return num1 + num2;
}
 //


function restar(num3, num4) {
    let resultado = num3 - num4;
    console.log(resultado);
    return resultado   
    
}
let resta = restar(20, 15);
console.log(`el resultado de la resta es ${resta}`);
console.log(`el resultado de la resta es ${restar(25, 10)}`);




// Funcion Flecha 

let multiplicar = (numero1, numero2) => {
    return numero1 * numero2
}





// Tabla del 5

/* for (let tablaCinco = 0; tablaCinco <= 10; tablaCinco ++){
    console.log(`5 x ${tablaCinco} = ${tablaCinco * 5}`);
};
 */

/* 
function tablas() {
    for(tabla = 0; tabla <= 10; tabla ++){
        document.writeln(`${num} x ${tabla} = ${tabla * num} <br>`)
    }
}

let num = parseInt(prompt("Ingresa un número para saber su Tabla!"));

tablas(); */

/* programa para pedir una palabra y que nos devuelva las vocales */


// 1. Crea una función que reciba dos números y devuelva su suma



function suma() {

    let num1 = parseFloat(prompt("Ingresa el primer número"));

    let num2 = parseFloat(prompt("Ingresa el segundo número"));

    let resultado;

    resultado = num1 + num2
    alert(`Ingresaste ${num1} y ${num2}. La suma de estos dos es ${resultado}`);
}

suma(); 




// 2. Crea una función que reciba un array de números y devuelva el mayor de ellos



function encontrarMayor() {
    let num1 = parseInt(prompt("Ingresa el primer número"));

    let num2 = parseInt(prompt("Ingresa el segundo número"));

    let num3 = parseInt(prompt("Ingresa el tercer número"));

    const arrayNumeros = [num1, num2, num3];

    let mayor = Math.max(...arrayNumeros); // El operador de propagación (...) "desempaqueta" el array

    alert(`Los números ingresados son ${num1}, ${num2}, ${num3}. El mayor de ellos es ${mayor}`);
}

encontrarMayor()





// 3. Crea una función que reciba un string y devuelva el numero de vocales que contiene


 
function contarVocales() {
    
    let contadorVocales = 0;

    let palabra = prompt("Ingresa una palabra y te devolvere la cantidad de vocales que tiene").toLowerCase();    
    
    for (let caracter = 0; caracter < palabra.length; caracter ++){
        
        if (
            palabra.charAt(caracter) === "a" ||
            palabra.charAt(caracter) === "e" ||
            palabra.charAt(caracter) === "i" ||
            palabra.charAt(caracter) === "o" ||
            palabra.charAt(caracter) === "u"
            ) 
            {
            contadorVocales++;
            }
    }
     alert(`La cantidad de vocales es ${contadorVocales}`); 

}

contarVocales()
 

 
    // OTRA FORMA DE RESOLVER EL EJERCICIO

function contarVocales() {

    let contadorVocales = 0;

    const vocales = "aeiou"

    let palabra = prompt("Ingresa la palabra para saber cuantas vocales tiene").toLowerCase();

    for (let i = 0; i < palabra.length; i ++){
        if (vocales.includes(palabra[i])) //
            {
                contadorVocales ++;
            }
    }
    
    alert (`La cantidad total de vocales es ${contadorVocales}`)
}

contarVocales()


// Metodo .includes()


let frase = "Hola como estas?";

// ¿La frase incluye la palabra 'Hola'? ; devuelve "TRUE" si es cierto sino "FALSE"

console.log(frase.includes("Hola"));


let arrayFrutas = ["banana", "manzana", "frutilla"];

// ¿El array de frutas incluye "Banana"?
console.log(arrayFrutas.includes("banana"));


// También funciona con números

let numeros = [30, 50, 80];

console.log(numeros.includes(80));

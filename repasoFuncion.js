// 1. Crea una función que reciba dos números y devuelva su suma


 function sumarDosNumeros() {

    let num1 = parseFloat(prompt("Ingresa un número"));

    let num2 = parseFloat(prompt("Ingresa otro número para sumarlo"));

    let resultado = num1 + num2;

    alert(`Ingresaste ${num1} y ${num2}. El resultado de la suma es ${resultado}`)

}

sumarDosNumeros()





// 2. Crea una función que reciba un array de números y devuelva el mayor de ellos

 function buscarMayor() {
    
    let num1 = parseFloat(prompt("Ingresa el primer número"));

    let num2 = parseFloat(prompt("Ingresa el segundo número"));

    let num3 = parseFloat(prompt("Ingresa el tercer número"))

    let num4 = parseFloat(prompt("Ingresa el cuarto número"))

    let num5 = parseFloat(prompt("Ingresa el quinto número"));

    const arrayNumeros = [num1, num2, num3, num4, num5];

    const mayor = Math.max(...arrayNumeros);

    const menor = Math.min(...arrayNumeros);

    alert(`Los números ingresados son ${num1}, ${num2}, ${num3}, ${num4}, ${num5}. El mayor de estos es ${mayor} y el menor es ${menor}`)


}

buscarMayor()





// 3. Crea una función que reciba un string y devuelva el numero de vocales que contiene

function contarVocales() {

    let contadorVocales = 0;

    const vocales = "aeiou";

    let palabra = prompt("Ingresa una palabra para ver cuantas vocales tiene").toLowerCase();

    for (let caracter = 0; caracter < palabra.length; caracter ++) {
        if (
            vocales.includes(palabra[caracter])
        ) {
            contadorVocales++;
        }
    }
    alert(`El total de vocales ingresadas es ${contadorVocales}`)

}

contarVocales()
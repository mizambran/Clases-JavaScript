/* Ejercicio 1 */

/* let contador = 1;

while(contador <= 20){
    document.writeln(`${contador} <br>`)
    contador ++;
} */

/* Ejercicio 4 */

/* let mes = prompt("Ingresa el Mes")

switch (true) {
    case (mes === "diciembre"):
            alert(`El mes ingresado es ${mes}, estas en Verano!`)        
        break;

    case(mes === "enero"):
            alert(`El mes ingresado es ${mes}, estas en Verano!`)        
        break;

    case(mes === "febrero"):
            alert(`El mes ingresado es ${mes}, estas en Verano!`)        
        break;

    case(mes === "marzo"):
            alert(`El mes ingresado es ${mes}, estas en Otoño!`)
        break;
        
    case(mes === "abril"):
            alert(`El mes ingresado es ${mes}, estas en Otoño!`)
        break;

    case(mes === "mayo"):
            alert(`El mes ingresado es ${mes}, estas en Otoño!`)
        break;
        
    case(mes === "junio"):
            alert(`El mes ingresado es ${mes}, estas en Invierno!`)
            break;

    case(mes === "julio"):
            alert(`El mes ingresado es ${mes}, estas en Invierno!`)
            break;

    case(mes === "agosto"):
            alert(`El mes ingresado es ${mes}, estas en Invierno!`)
            break;

    case(mes === "septiembre"):
            alert(`El mes ingresado es ${mes}, estas en Primavera!`)
            break;

    case(mes === "octubre"):
            alert(`El mes ingresado es ${mes}, estas en Primavera!`)
            break;

    case(mes === "noviembre"):
            alert(`El mes ingresado es ${mes}, estas en Primavera!`)
            break;
    default:
        alert("El mes ingresado no es valido!.")
        break;
} */

/* Ejercicio 6 */

/* let animales = ["Leon", "Tigre", "Pantera", "Leopardo", "Elefante"];

animales.unshift("Jirafa");

animales.push("Mono");

animales.splice(3,1);

console.log(animales.length);
 */



/* Ejercicio 7 */

let peso = parseFloat(prompt("Ingresa tu peso"));

let altura = parseFloat(prompt("Ingresa tu altura"));

let imc = (peso / (altura * 2) * 100).toFixed(2);

if (imc < 18.5){
    alert(`Tu indice de masa corporal es ${imc} . Resultado: Peso Bajo.`)
} else if (imc >= 18.5 && imc < 24.99) {
    alert(`Tu indice de masa corporal es ${imc} . Peso normal.`)    
} else {
    alert(`Tu indice de masa corporal es ${imc} . Sobrepeso.`)
};






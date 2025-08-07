/* document.writeln("El valor del numero es 1")
document.writeln("El valor del numero es 2")
document.writeln("El valor del numero es 3")
document.writeln("El valor del numero es 4")
document.writeln("El valor del numero es 5")
document.writeln("El valor del numero es 6")
document.writeln("El valor del numero es 7")
document.writeln("El valor del numero es 8")
document.writeln("El valor del numero es 9")
document.writeln("El valor del numero es 10")
 */

let num = 100;
 
 //opcion 1 
/* while (num <= 10) {
    document.writeln(`El valor del numero es ${num} <br>`)
    
    num = num + 1;
} */ 


// opcion 2 - operador de incremento ( ++ )

/* while (num <=10) {
    document.writeln(`El valor del numero es ${num} <br>`)
    num ++ ;    
} // este tipo de bucle analiza y luego ejecuta

 */
/* nuevo bucle */

/* do {
    document.writeln(`El valor del numero es ${num} <br>`)
    num ++ ;
} while (num <= 10 );    // este tipo de bucle primero ejecuta y luego analiza ; si se cumple con la condición vuelve a ejecutar

 */


// for - hacemos un contador que haga una cuenta regresiva

for ( let contador = 10 ; contador >= 1 ; contador --) {
    document.writeln(`El contador es igual a ${contador} <br>`);
}


// for es igual que while ya que analiza y luego ejecuta ;  se 




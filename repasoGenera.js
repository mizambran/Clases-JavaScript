/* let compra;

let descuento;

let totalCompra;

compra = parseInt(prompt("Ingresa el valor de tu compra"));

descuento = parseInt(prompt("Ingresa tu descuento"));

 if (descuento > 0) {

    totalCompra = compra - (compra * (descuento / 100));

    document.writeln(`Con el descuento tenes que pagar ${totalCompra}`)
} else {
    totalCompra = compra ;

    document.writeln(`NO tenes descuentos aplicados ${compra}`)
} 

totalCompra = (descuento > 0) ? `total es ${compra - (compra * (descuento / 100))}` : `No tenes descuentos ${compra}`
document.writeln(totalCompra); 


 */
/* 
let compra;

let descuento;

let totalCompra;

compra = parseInt(prompt("Ingresa el valor de la compra"))

descuento = parseInt(prompt("Ingresa el descuento"))


totalCompra = (descuento >= 0) ? `${totalCompra = compra - (compra * (descuento /100))}` : `${compra}`

document.writeln(`El valor de la compra es $${compra}, el descuento aplicado es ${descuento}%. Entonces el total a pagar es $${totalCompra}`) */

let compra;

let descuento;

let totalCompra;

compra = parseInt(prompt("Ingresa el valor de la compra"))

descuento = parseFloat(prompt("Ingresa el porcentaje de descuento"))

if (descuento > 100) { 

    totalCompra = compra;

} else if (descuento >= 0) {

    totalCompra = compra - (compra * (descuento / 100));

} else {

    alert("Ingresa descuento valido")

    descuento = 0 ;

    totalCompra = compra;

}
document.writeln(`El valor de la compra es $${compra} y el descuento aplicado es ${descuento}%. Entonces el total a pagar es $${totalCompra}`);



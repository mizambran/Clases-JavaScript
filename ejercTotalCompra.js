/* 
1. pedir a un usuario que ingrese el precio de una compra
2. pedir al usuario que ingrese el % de descuento (si hay)
3. calcular el total aplicando el descuento
4. imprimir el total de la compra
*/

let compra;

let descuento;

let totalCompra;

compra = parseInt(prompt("Ingresa el valor de su compra"));

descuento = parseInt(prompt("Ingrese su descuento"));

if (descuento >= 0) {

    totalCompra = compra - (compra * (descuento / 100));

}  else {
    
    totalCompra = compra;

    alert("Ingresa un descuento valido")
}

document.writeln(`Valor de la compra $${compra} y descuento de ${descuento}% por lo tanto el total de la compra es $${totalCompra}`);


/* Pedimos al usuario que ingrese un día de la semana
    evalumos : si es Lunes es comienzo de semana
    Martes 
*/

do {
    let dia = prompt("Ingresa el día de la semana en el que estas.").toLowerCase() ;

switch (dia) {
    case "lunes": 
        alert("Estas comenzando la semana")
        break;
    
    case "miercoles":
        alert("mitad de semana")
        break;

    case "viernes":
        alert("casi es fin de semana!!!!")
        break;
        
    case "domingo":
        alert("termino la semana")
        break;    


    default:
        alert("Es un día normal.")
        break;
} 

} while (confirm("Quieres volver a consultar?"));

let palabra = prompt("Ingrese una palabra de 6 caracteres").toLowerCase();

for (let caracter = 0 ; caracter <= palabra.length ; caracter ++) {
    if (
        palabra.charAt (caracter) === "a" ||
        palabra.charAt (caracter) === "e" ||
        palabra.charAt (caracter) === "i" ||
        palabra.charAt (caracter) === "o" ||
        palabra.charAt (caracter) === "u"
    ) {
        document.writeln(palabra.charAt(caracter));
    }
}


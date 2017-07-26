"use strict";
function getName() {
    return "Chemo";
}
var nombre = "Juan";
var apellido = "Perez";
var edad = 32;
var texto = "Hola, " + nombre + " " + apellido + " (" + edad + ")";
console.log(texto);
texto = "Hola, " + nombre + " " + apellido + " (" + edad + ") ";
console.log(texto);
var texto2 = "" + (1 + 3);
console.log(texto2);
texto2 = getName();
console.log(texto2);

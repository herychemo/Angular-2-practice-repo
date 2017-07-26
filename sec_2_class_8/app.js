"use strict";
/*

  Para compilar
tsc app.ts

  para observador archivo.
tsc app.ts -w

  para iniciar proyecto typescript,
tsc -init


*/
function saludar(nombre) {
    console.log("Hola " + nombre);
    console.log("Hola " + nombre.toUpperCase());
}
var wolverine = {
    nombre: "Logan"
};
saludar(wolverine.nombre);

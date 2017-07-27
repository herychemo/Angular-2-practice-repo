"use strict";
//function enviarMission(xmen: any ){
function enviarMission(xmen) {
    console.log("Enviando a: " + xmen.nombre);
}
function enviarCuartel(xmen) {
    console.log("Enviando a cuartel: " + xmen.nombre);
}
var wolverine = {
    nombre: "Wolverine",
    poder: "Regeneration"
};
enviarMission(wolverine);
enviarCuartel(wolverine);

"use strict";
var Avenger = (function () {
    function Avenger(nombre, equipo, nombreReal) {
        this.nombre = "No Name";
        this.equipo = "No definido";
        this.nombreReal = "";
        this.canFight = false;
        this.peleasGanadas = 0;
        console.log("Se ejecuto el constructor");
        this.nombre = nombre;
        this.equipo = equipo;
        this.nombreReal = nombreReal;
    }
    return Avenger;
}());
var antman = new Avenger("AntMan", "Captain America", "Scott Lang");
console.log(antman);

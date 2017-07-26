"use strict";
var myFunction = function (a) {
    return a;
};
var myFunctionF = function (a) { return a; };
var myFunction2 = function (a, b) {
    return a + b;
};
var myFunction2F = function (a, b) { return a + b; };
var myFunction3 = function (nombre) {
    nombre = nombre.toUpperCase();
    return nombre;
};
var myFunction3F = function (name) {
    name = name.toUpperCase();
    return name;
};
console.log(myFunction("Hola"));
console.log(myFunctionF("Hola Flecha"));
console.log(myFunction2(3, 4));
console.log(myFunction2F(3, 4));
console.log(myFunction3("Chemo"));
console.log(myFunction3F("Chemo"));
var nombre = "Juan";
var hulk = {
    nombre: "Bruce",
    smash: function () {
        var _this = this;
        setTimeout(function () { return console.log(_this.nombre + " Smash!!"); }, 1500);
    },
    smash_bad_this: function () {
        setTimeout(function () { console.log(this.nombre + " Smash!!"); }, 1500);
    },
};
hulk.smash();
hulk.nombre = "Hulk";
hulk.smash();

"use strict";
function activar(who, the_object, momento) {
    if (the_object === void 0) { the_object = "Bati-Signal"; }
    var mensaje;
    mensaje = who + " activated the " + the_object;
    if (momento)
        mensaje += " " + momento;
    console.log(mensaje);
}
activar("Chemo", "Chemo-Signal", "Yesterday");

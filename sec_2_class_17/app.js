"use strict";
var prom1 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("Promesa terminada");
        //termina bien
        resolve();
    }, 1500);
    //Termina mal
    //reject();
});
console.log("Step 1");
prom1.then(function () {
    console.log("El pedo salio BIEEN alv");
}, function () {
    console.error("Valio madre");
});
console.log("Step 2");

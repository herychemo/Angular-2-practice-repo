

/** Reestructuracion objects */

let avenger = {
    nombre :"Steve",
    clave:"Captain America",
    poder:"droga"
};


//let nombre:string = avenger.nombre;
//let clave:string = avenger.clave;
//let poder:string = avenger.poder;
let { nombre : _name, clave, poder } = avenger;

console.log(_name,clave,poder);


/** Reestructuracion Arrays */

let avengers:string[] = ["Thor", "Steve", "Tony"];
let [thor, ,iconm] = avengers;
console.log( thor,iconm );

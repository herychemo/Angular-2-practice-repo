
let myFunction = function(a:any){
    return a;
}
let myFunctionF = (a:any) => a;

let myFunction2 = function(a:number,b:number){
    return a+b;
}
let myFunction2F = (a:number, b:number) => a + b;

let myFunction3 = function(nombre:string){
    nombre = nombre.toUpperCase();
    return nombre;
}
let myFunction3F = (name:string) => {
    name = name.toUpperCase();
    return name;
}

console.log( myFunction("Hola") );
console.log( myFunctionF("Hola Flecha") );

console.log( myFunction2(  3, 4   ) );
console.log( myFunction2F( 3, 4  ) );

console.log( myFunction3(  "Chemo"   ) );
console.log( myFunction3F( "Chemo"  ) );

let nombre:string = "Juan"

let hulk = {
    nombre : "Bruce",
    smash(){
        setTimeout( ()=> console.log( `${this.nombre} Smash!!` ) ,1500);
    },
    smash_bad_this(){
        setTimeout( function(){console.log( `${this.nombre} Smash!!` );} ,1500);
    },
}
hulk.smash();
hulk.nombre = "Hulk";
hulk.smash();

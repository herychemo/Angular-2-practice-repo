
function getName(){
    return "Chemo";
}

let nombre:string = "Juan";
let apellido :string = "Perez";
let edad:number = 32;

let texto = "Hola, " + nombre + " " + apellido + " ("+edad+")";

console.log(texto);

texto = `Hola, ${nombre} ${apellido} (${edad}) `

console.log(texto);


let texto2:string = `${1+3}`
console.log(texto2);


texto2 = `${getName()}`;
console.log(texto2);


class Avenger{
    nombre:string = "No Name";
    equipo:string = "No definido";
    nombreReal :string = "";
    canFight:boolean = false;
    peleasGanadas:number = 0;

    constructor( nombre:string, equipo:string, nombreReal :string){
        console.log("Se ejecuto el constructor");
        this.nombre = nombre;
        this.equipo = equipo;
        this.nombreReal = nombreReal;
    }

}
let antman:Avenger = new Avenger( "AntMan","Captain America","Scott Lang" );

console.log( antman );

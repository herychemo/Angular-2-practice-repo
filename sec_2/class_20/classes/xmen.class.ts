
export class Xmen {
  public nombre:string;
  public clave:string;
  constructor(nombre:string, clave:string) {
    this.nombre = nombre;
    this.clave = clave;
  }
  public imprimir(){
    console.log(`$(this.nombre) - ${ this.clave } ...`);
  }
}

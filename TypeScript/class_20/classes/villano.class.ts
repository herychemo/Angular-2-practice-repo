
export class Villano {
  public nombre:string;
  public plan:string;
  constructor(nombre:string ,plan:string) {
    this.nombre = nombre;
    this.plan = plan;
  }
  public imprimirPlan(){
    console.log(`El plan de ${this.nombre}, es: ${this.plan} ...`);
  }
}

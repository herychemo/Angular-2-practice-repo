import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre = "Heriberto";

  nombre2 = "heRIbErto rEyeS eSpaRZa"

  arreglo = [1,2,3,4,5,6,7,8,9,10];
  PI = Math.PI;
  a:number = 0.234;
  salario:number = 1234.5;

  heroe:any = {
      name:"Logan",
      key:"Wolverine",
      age:500,
      address:{
          street:"First One",
          casa : "19"
      }
  };

  promiseValue = new Promise( (resolve, reject)=>{
      setTimeout(()=>resolve("Llego la data!"), 3500);
  });

  fecha = new Date();



}

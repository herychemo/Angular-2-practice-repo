
import { Component } from '@angular/core';

@Component({
    selector: 'app-body',
    templateUrl: './body.component.html',
    //styleUrls: ['./app.component.css']
})

export class BodyComponent {
    //title     : string    = 'Hola Mundo';
    frase:any = {
        mensaje :"Un Gran Poder, Requiere una gran responsabilidad.",
        autor:"Ben Parker"
    };
    mostrar : boolean = false;
    personajes : string[] = ["Spiderman", "Venom", "Dr. Octopus"];
}

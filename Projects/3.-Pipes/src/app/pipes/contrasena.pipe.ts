import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

    transform(value: string, activar: boolean): string {
        if(activar){
            let aux = value.split("");
            for(let i in aux)   aux[i] = '*';
            return aux.join('');
        }else
            return value;
    }

}

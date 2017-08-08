import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nophoto'
})
export class NophotoPipe implements PipeTransform {
    transform(value: any, args?: any): any {
        if( !value )
            return "assets/img/noimage.png";
        return value;
    }
}

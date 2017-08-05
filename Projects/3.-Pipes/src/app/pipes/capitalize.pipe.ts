
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {
    transform(value: string, full_capitalize: boolean = true): string {
        value = value.trim().toLowerCase();
        let result = ""
        if( full_capitalize ){
            let val_arr:Array<string> = value.split(" ");
            value = "";
            for( let i in val_arr )
                val_arr[i] = this.capitalize_word( val_arr[i] ) ;
            result = val_arr.join(" ");
        }else
            result = this.capitalize_word(value);
        return result;
    }
    private capitalize_word(word:string) : string{
        return word.charAt(0).toUpperCase() + word.substr(1);
    }
}

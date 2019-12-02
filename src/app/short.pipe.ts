import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'short'
})
export class ShortPipe implements PipeTransform {

  transform(value:any,data:string): any {

    
    return value.substr(0,4)+'......' ;
  }

}

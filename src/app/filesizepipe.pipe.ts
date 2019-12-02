import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filesize'
})
export class FilesizepipePipe implements PipeTransform {

  transform(size: any): any {
    return (size / (1024 * 1024)).toFixed(2) + 'MB';;
  } 
}

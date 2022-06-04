import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noimage'
})
export class NoimagePipe implements PipeTransform {

  transform(images:any): any {
    if(!images){
      return 'assets/noimage.png';
    }
    if(images){
      return images;
    }else{
      return 'assets/noimage.png';
    }
  }

}

import { Pipe, PipeTransform } from '@angular/core';
import { Sizes} from './types';

@Pipe({ name: 'flavorSize' })
export class FlavorSizePipe implements PipeTransform {
  private sizeUnits = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB'];

  transform(size: number = 0, unit:any): string {
    
    unit= Sizes[unit];

    while (size >= 1024) {
      size /= 1024;
      unit++;
    }
    return size + ' ' + this.sizeUnits[unit];
  }
}

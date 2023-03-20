import { Pipe, PipeTransform } from '@angular/core';
import { Gun } from 'src/models/gun.model';

@Pipe({
  name: 'sameCategory'
})
export class SameCategoryPipe implements PipeTransform {

  transform(lista: Gun[], categoryId: number): Gun[] {
    return lista.filter(gun =>gun.categoryId == categoryId)
  }

}

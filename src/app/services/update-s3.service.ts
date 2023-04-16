import { Injectable } from '@angular/core';
import { Gun } from 'src/models/gun.model';

@Injectable({
  providedIn: 'root'
})
export class UpdateS3Service {

  constructor() {}

  updatedGunList(originalList:Gun[]):Gun[]{
    return this.getGunsS3Drop(originalList);
  }
  // total de 62 armas no inicio da season 3
  getGunsS3Drop(originalList:Gun[]):Gun[]{
    let gunList:Gun[] =[];

    //inserir em 48, dps de spx
    let gunAdder = new Gun("FJX IMPERIUM",6 , '10 3 STREAKS', '25 LONGSHOT','25 HEADSHOT', 'UNLOCK 51 POLY');
    gunAdder.setCamos('50 KILLS', '20 2 KILL 10 SEC', '40 FOCUSED','40 ONE SHOT')

    originalList.splice(48,0,gunAdder)
    //inserir 15 em depois de taq-v
    gunAdder = new Gun("CRONEN SQUALL",1 , '10 3 STREAKS', '25 LONGSHOT','25 HEADSHOT', 'UNLOCK 51 POLY');
    gunAdder.setCamos('50 KILLS', '15 DOUBLE', '20 BEHIND','40 SUPRESSOR')

    originalList.splice(15,0,gunAdder)

    return originalList;
  }
}

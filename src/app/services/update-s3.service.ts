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
  getGunsS3Drop(originalList:Gun[]):Gun[]{
    let gunList:Gun[] =[];

    let gunAdder = new Gun("FJX IMPERIUM",6 , '10 3 STREAKS', '25 LONGSHOT','25 HEADSHOT', 'UNLOCK 51 POLY');
    gunAdder.setCamos('50 KILLS', '20 2 KILL 10 SEC', '40 FOCUSED','40 ONE SHOT')
    originalList.push(gunAdder);

    gunAdder = new Gun("CRONEN SQUALL",1 , '10 3 STREAKS', '25 LONGSHOT','25 HEADSHOT', 'UNLOCK 51 POLY');
    gunAdder.setCamos('50 KILLS', '15 DOUBLE', '20 BEHIND','40 SUPRESSOR')
    originalList.push(gunAdder);
    return originalList;
  }
}

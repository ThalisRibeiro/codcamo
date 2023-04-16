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
  // total de 60 armas no inicio da season 3
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
  addM4(originalList:Gun[]):Gun[]{
    let m4 = new Gun("M4",0, '10 3 STREAKS', '25 LONGSHOT','25 HEADSHOTS', 'unlock 51 poly');
  
    m4.setCamos('50 kill','50 ADS','10 DOUBLE KILL','15 BEHIND',)
    
    originalList.splice(0,0,m4);
    // originalList.push(m4);

    return originalList;
  }
}

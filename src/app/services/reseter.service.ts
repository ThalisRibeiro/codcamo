import { Injectable } from '@angular/core';
import { CamoCounter } from 'src/models/camos-counter.model';
import { Gun } from 'src/models/gun.model';
import { LocalStorageService } from './local-storage.service';
import { UpdaterService } from './updater.service';

@Injectable({
  providedIn: 'root'
})
export class ReseterService {

  constructor(private localStorage: LocalStorageService, private update: UpdaterService) { }
  
  fullResetGuns():Gun[]{
    this.localStorage.excludeStorage();
    return this.update.checkGunQuantitySwitch(undefined);
  }

  resetGuns(gunList: Gun[]):Gun[]{
    let newGunList:Gun[]=[];
    gunList.forEach(gun => {
      gun._goldCamo.isUnlocked=false;
      gun._goldCamo.isAchievable=false;
      
      gun._platinumCamo.isUnlocked=false;
      gun._platinumCamo.isAchievable=false;
      
      gun._polyCamo.isUnlocked=false;
      gun._polyCamo.isAchievable=false;
      
      gun._orionCamo.isUnlocked=false;
      gun._orionCamo.isAchievable=false;
      
      gun._normalCamos.forEach(camo => {
        camo.isUnlocked = false
      });
      newGunList.push(gun)
    });
    return newGunList;
  }
  resetCount(){
    return new CamoCounter
  }
}

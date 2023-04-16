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

  resetCount(){
    return new CamoCounter
  }
}

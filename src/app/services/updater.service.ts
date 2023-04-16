import { Injectable } from '@angular/core';
import { Gun } from 'src/models/gun.model';
import { DefaultDataService } from './default-data.service';
import { UpdateS3Service } from './update-s3.service';

@Injectable({
  providedIn: 'root'
})
export class UpdaterService {

  constructor(private updateS3: UpdateS3Service, private defaultGuns: DefaultDataService) { 
    this._loadCount = false;
  }
  
  private _loadCount : boolean;
  public get loadCount() : boolean {
    return this._loadCount;
  }
  // public set loadCount(v : boolean) {
  //   this._loadCount = v;
  // }
  
  checkGunQuantity(gunList: Gun[]): Gun[]{
    //verificador se ja possui todas as armas da s3 launch
    if(gunList.length==61){
      this._loadCount = true;
      return gunList;
    }
    //se ele não possui armas até a season 3, apaga tudo e retorna uma gunlist até season3 launch
    // if(gunList.length<61){
    else{
      let newGunlist = this.defaultGuns.getDefaultGunList();
      newGunlist = this.updateS3.updatedGunList(newGunlist);
      return newGunlist
    }
  }

  checkGunQuantitySwitch(gunList: Gun[]): Gun[]{
    let gunListReturner:Gun[];
    switch (gunList.length) {
      case 62:
        gunListReturner = gunList;
        this._loadCount = true;
        break;
    
      default:
        gunListReturner = this.getAllGuns()
        break;
    }
    return gunListReturner;
  }
  getAllGuns(): Gun[]{
    
    let newGunlist = this.defaultGuns.getDefaultGunList();
    newGunlist = this.updateS3.updatedGunList(newGunlist);
    return newGunlist
  }
}

import { Injectable } from '@angular/core';
import { camo } from 'src/models/camo.model';
import { CamoCounter } from 'src/models/camos-counter.model';
import { Gun } from 'src/models/gun.model';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }
  saveItems(gunsList: Gun[], version: Number, counters: CamoCounter){
    localStorage.setItem('gunsList',JSON.stringify(gunsList));
    localStorage.setItem('version', version.toString());
    localStorage.setItem('count', JSON.stringify(counters))
    console.log('itens setados')
  }

  getGunList():Gun[]{
    let jsonItem = localStorage.getItem('gunsList');
    if (jsonItem == null)
      return [];
    let gunsList:Gun[] = JSON.parse(jsonItem);
    console.log(gunsList)
    // return gunsList
    return this.gunListCreator(gunsList);
  }
  getVersion(){

  }
  getCounter(): CamoCounter{
    let jsonItem = localStorage.getItem('count');
    if(jsonItem == null)
      return new CamoCounter;
    let counter:CamoCounter = JSON.parse(jsonItem); 
    return counter
  }
  gunListCreator(gunListFromJson: Gun[]):Gun[]{
    let newList:Gun[] = [];
    gunListFromJson.forEach(gun => {
      newList.push(new Gun(gun.name,gun.categoryId))
      newList[newList.length-1]._goldCamo = new camo(gun._goldCamo.challenge, gun._goldCamo.isAchievable, gun._goldCamo.isUnlocked, gun._goldCamo.isHidden);
      newList[newList.length-1]._orionCamo = new camo(gun._orionCamo.challenge, gun._orionCamo.isAchievable, gun._orionCamo.isUnlocked, gun._orionCamo.isHidden);
      newList[newList.length-1]._platinumCamo = new camo(gun._platinumCamo.challenge, gun._platinumCamo.isAchievable, gun._platinumCamo.isUnlocked, gun._platinumCamo.isHidden);
      newList[newList.length-1]._polyCamo = new camo(gun._polyCamo.challenge, gun._polyCamo.isAchievable, gun._polyCamo.isUnlocked, gun._polyCamo.isHidden);
      newList[newList.length-1].setNormalCamosWithData(gun._normalCamos)
    }); 
    return newList;
  }
}

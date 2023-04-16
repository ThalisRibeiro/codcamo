import { Component, OnInit } from '@angular/core';

import { gunCategory } from 'src/models/guncategory.model';
import { Gun } from 'src/models/gun.model';
import { DefaultDataService } from '../services/default-data.service';
import { CamoCounter } from 'src/models/camos-counter.model';
import { achievability } from 'src/models/verify-achievability';
import { LocalStorageService } from '../services/local-storage.service';
import { UpdateS3Service } from '../services/update-s3.service';
import { ReseterService } from '../services/reseter.service';
import { UpdaterService } from '../services/updater.service';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})
export class ListagemComponent implements OnInit{
  public guncategories: gunCategory[] = [];
  public gunsList: Gun[] = [];
  camoCounter = new CamoCounter;
  achievable = new achievability;
  
  ngOnInit(): void {
      let mockData :DefaultDataService = new DefaultDataService();
      this.guncategories = mockData.getDefaultGunCategory();
      let localGun:Gun[] = this.localStorage.getGunList();
      
      this.gunsList = this.updater.checkGunQuantitySwitch(localGun);
      if(this.updater.loadCount == true){
        this.camoCounter = this.localStorage.getCounter();
      }
  }

  constructor(private localStorage: LocalStorageService, private updater: UpdaterService, private resetService: ReseterService){
    
  }
  reseter(){
    this.gunsList = this.resetService.fullResetGuns()
    this.camoCounter = this.resetService.resetCount();
    this.save()
  }
  save(){
    this.localStorage.saveItems(this.gunsList,3, this.camoCounter)
  }
  hiddenClick(i:number){
    this.guncategories[i].isHidden = !this.guncategories[i].isHidden;
    console.log(this.guncategories[i].name+' foi clicado, isHidden= '+this.guncategories[i].isHidden )
  }
  normalCamoClick(gun: Gun, camoId: number){
    let id = this.findIndex(gun)
    if (id == -1) {
      return;
    }
    this.gunsList[id].normalCamos[camoId].isUnlocked = !this.gunsList[id].normalCamos[camoId].isUnlocked;
    this.gunsList[id].isGoldAchievable();
    this.save();
  }
  findIndex(gun: Gun):number{
    return this.gunsList.indexOf(gun);
  }
  goldCamoClick(gun: Gun){
    let id = this.findIndex(gun)
    if (id == -1) {
      return;
    }
    let beforeChange =this.gunsList[id]._goldCamo.isUnlocked; 
    this.gunsList[id]._goldCamo.isUnlocked = !this.gunsList[id]._goldCamo.isUnlocked;

    this.totalDeGold(id, beforeChange);
    this.save();
  }
  totalDeGold(id:number, wasUnlockedBefore:boolean) {
    switch (this.gunsList[id]._goldCamo.isUnlocked) {
      case true:
        this.camoCounter.goldCounter[this.gunsList[id].categoryId] += 1;
        break;

      default:
        if(wasUnlockedBefore==false)
        break;
        if(this.camoCounter.goldCounter[this.gunsList[id].categoryId]>0)
        this.camoCounter.goldCounter[this.gunsList[id].categoryId] -= 1;
        break;
    }
    console.log(this.guncategories[this.gunsList[id].categoryId].name+" possui "+this.camoCounter.goldCounter[this.gunsList[id].categoryId]+" golds")
  }
  //platPolyId 0 para plat 1 para orion
  platinumPolyOrionClick(gun: Gun, platPolyId:number){
    let id = this.findIndex(gun);
    if (id == -1) {
      return;
    }
    let beforeChange;
    switch (platPolyId) {
      case 0:  
        beforeChange = this.gunsList[id]._platinumCamo.isUnlocked;
        this.changePlat(id);
        this.totalDePlatinum(id, beforeChange, platPolyId)
        break;
      case 1:
        beforeChange = this.gunsList[id]._polyCamo.isUnlocked;
        this.changePoly(id);
        this.totalDePoly(id, beforeChange, platPolyId)
        break;
      case 2:
        this.changeOrion(id);
        break;
      default:
        break;
    }
    this.save();
  }
  
  
  private changePlat(id: number) {
    this.gunsList = this.achievable.canUnlockPlatinum(this.gunsList, this.guncategories[this.gunsList[id].categoryId], this.camoCounter.goldCounter[this.gunsList[id].categoryId]);
    this.gunsList[id]._platinumCamo.isUnlocked = !this.gunsList[id]._platinumCamo.isUnlocked;
  }

  private changePoly(id: number) {
    this.gunsList = this.achievable.canUnlockPoly(this.gunsList, this.camoCounter.platPolyCounter[0]);
    this.gunsList[id]._polyCamo.isUnlocked = !this.gunsList[id]._polyCamo.isUnlocked;
  }
  private changeOrion(id: number) {
    this.gunsList = this.achievable.canUnlockOrion(this.gunsList, this.camoCounter.platPolyCounter[1]);
    this.gunsList[id]._orionCamo.isUnlocked = !this.gunsList[id]._orionCamo.isUnlocked;
  }

  //id 0 para plat 1 para orion
  totalDePlatinum(id:number, wasUnlockedBefore:boolean,platPolyId:number) {
    switch (this.gunsList[id]._platinumCamo.isUnlocked) {
      case true:
        this.camoCounter.platPolyCounter[platPolyId]+= 1;
        break;

      default:
        if(wasUnlockedBefore==false)
        break;
        if(this.camoCounter.platPolyCounter[platPolyId]>0)
        this.camoCounter.platPolyCounter[platPolyId] -= 1;
        break;
    }
    console.log(this.camoCounter.platPolyCounter[0]+" platinas desbloqueadas " + this.camoCounter.platPolyCounter[1]+" poly desbloqueadas ");
  }  
  totalDePoly(id:number, wasUnlockedBefore:boolean,platPolyId:number) {
    switch (this.gunsList[id]._polyCamo.isUnlocked) {
      case true:
        this.camoCounter.platPolyCounter[platPolyId]+= 1;
        break;

      default:
        if(wasUnlockedBefore==false)
        break;
        if(this.camoCounter.platPolyCounter[platPolyId]>0)
        this.camoCounter.platPolyCounter[platPolyId] -= 1;
        break;
    }
    console.log(this.camoCounter.platPolyCounter[0]+" platinas desbloqueadas " + this.camoCounter.platPolyCounter[1]+" poly desbloqueadas ");
  }  
}

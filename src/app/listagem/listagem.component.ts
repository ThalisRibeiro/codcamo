import { Component, OnInit } from '@angular/core';

import { gunCategory } from 'src/models/guncategory.model';
import { Gun } from 'src/models/gun.model';
import { DefaultDataService } from '../services/default-data.service';
import { CamoCounter } from 'src/models/camos-counter.model';
import { achievability } from 'src/models/verify-achievability';

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
      this.gunsList = mockData.getDefaultGunList();
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
  }
  findIndex(gun: Gun):number{
    return this.gunsList.indexOf(gun);
  }
  goldCamoClick(gun: Gun){
    let id = this.findIndex(gun)
    if (id == -1) {
      return;
    }
    this.gunsList[id]._goldCamo.isUnlocked = !this.gunsList[id]._goldCamo.isUnlocked;
    this.totalDeGold(id);

  }
  totalDeGold(id:number) {
    switch (this.gunsList[id]._goldCamo.isUnlocked) {
      case true:
        this.camoCounter.goldCounter[this.gunsList[id].categoryId] += 1;
        break;

      default:
        if(this.camoCounter.goldCounter[this.gunsList[id].categoryId]>0)
        this.camoCounter.goldCounter[this.gunsList[id].categoryId] -= 1;
        break;
    }
    console.log(this.guncategories[this.gunsList[id].categoryId].name+" possui "+this.camoCounter.goldCounter[this.gunsList[id].categoryId]+" golds")
  }
}

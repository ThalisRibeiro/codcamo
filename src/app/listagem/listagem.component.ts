import { Component, OnInit } from '@angular/core';
import { gunCategory } from 'src/models/guncategory.model';
import { Gun } from 'src/models/gun.model';
import { DefaultDataService } from '../services/default-data.service';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})
export class ListagemComponent implements OnInit{
  public guncategories: gunCategory[] = [];
  public gunsList: Gun[] = [];
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
  }
}

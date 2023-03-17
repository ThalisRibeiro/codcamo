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

}

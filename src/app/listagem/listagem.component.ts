import { Component, OnInit } from '@angular/core';
import { gunCategory } from 'src/models/guncategory.model';
import { DefaultDataService } from '../services/default-data.service';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})
export class ListagemComponent implements OnInit{
  public guncategories: gunCategory[] = [];
  ngOnInit(): void {
      let mockData :DefaultDataService = new DefaultDataService();
      this.guncategories = mockData.getDefaultGunCategory();
  }

}

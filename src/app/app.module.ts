import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListagemComponent } from './listagem/listagem.component';
import { DefaultDataService } from './services/default-data.service';
import { SameCategoryPipe } from './pipes/same-category.pipe';
import { AppRoutingModule } from './app-routing.module';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    ListagemComponent,
    SameCategoryPipe,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [DefaultDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }

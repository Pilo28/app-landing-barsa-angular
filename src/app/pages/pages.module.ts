import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';

import { HomeComponent } from './home/home.component';
import { LandingPlayersComponent } from './landing-players/landing-players.component';
import { HeaderComponent } from '../components/header/header.component';
import { FooterComponent } from '../components/footer/footer.component';
import { CardComponent } from '../components/card/card.component';




@NgModule({
  declarations: [
    HomeComponent,
    LandingPlayersComponent,
    HeaderComponent, 
    FooterComponent,
    CardComponent 
  ],
  imports: [
    CommonModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }

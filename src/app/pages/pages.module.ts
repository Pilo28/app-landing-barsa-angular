import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { TranslateModule } from '@ngx-translate/core';

import { HomeComponent } from './home/home.component';
import { LandingPlayersComponent } from './landing-players/landing-players.component';
import { HeaderComponent } from '../components/header/header.component';
import { FooterComponent } from '../components/footer/footer.component';
import { CardComponent } from '../components/card/card.component';
import { PlayerDetailsComponent  } from '../components/player-details/player-details.component';
import { BackgroundImgComponent } from '../components/background-img/background-img.component';
import { WeatherLibModule } from 'my-bcn-time';
import { SpinnerLoadComponent } from '../utils/components/spinner-load/spinner-load.component';


@NgModule({
  declarations: [
    HomeComponent,
    LandingPlayersComponent,
    HeaderComponent, 
    FooterComponent,
    CardComponent,
    PlayerDetailsComponent,
    BackgroundImgComponent,
    SpinnerLoadComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    TranslateModule,
    WeatherLibModule
  ]
})
export class PagesModule { }

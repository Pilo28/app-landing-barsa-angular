import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LandingPlayersComponent } from './landing-players/landing-players.component';
import { PlayerDetailsComponent } from '../components/player-details/player-details.component';


const routes: Routes = [
  { path: '', component: HomeComponent, children: [
    { path: '', component: LandingPlayersComponent },
    { path: 'player/:id', component: PlayerDetailsComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
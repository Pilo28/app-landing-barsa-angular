import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-landing-players',
  templateUrl: './landing-players.component.html',
  styleUrls: ['./landing-players.component.scss']
})
export class LandingPlayersComponent {

  scrollToSection(section: string) {
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
  }
}

import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Player } from '../../models/player.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() player!: Player;

  constructor(private router: Router) {}

  navigateToPlayerDetail(): void {
    console.log(`Navigating to player detail for player ID: ${this.player.id}`);
    this.router.navigate(['/home/player', this.player.id]).then(success => {
      if (success) {
        console.log('Navigation was successful!');
      } else {
        console.log('Navigation failed!');
      }
    });
  }
}

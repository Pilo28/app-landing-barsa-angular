import { Component, Input } from '@angular/core';
import { Player } from '../../models/player.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() player!: Player;
}

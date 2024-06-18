import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlayersService } from '../../services/players.service';
import { Player } from '../../models/player.interface';

@Component({
  selector: 'app-player-details',
  templateUrl: './player-details.component.html',
  styleUrls: ['./player-details.component.scss']
})
export class PlayerDetailsComponent implements OnInit {
  player: Player | undefined;
  isLoading = true;

  constructor(
    private route: ActivatedRoute,
    private playersService: PlayersService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const playerId = params.get('id');
      if (playerId) {
        this.getPlayerDetails(playerId);
      }
    });
  }

  getPlayerDetails(id: string): void {
    this.playersService.getPlayers().subscribe((players: Player[]) => {
      this.player = players.find(p => p.id === +id);
      // Retraso de 1 segundo antes de finalizar la carga
      setTimeout(() => {
        this.isLoading = false; // Se termina la carga y se muestra el contenido
      }, 1000);
    });
  }
}

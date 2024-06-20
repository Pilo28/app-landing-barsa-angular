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
  hasError = false;

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

  onLoad(): void {
    this.isLoading = false;
  }

  onError(): void {
    this.isLoading = false;
    this.hasError = true;
  }
  getPlayerDetails(id: string): void {
    this.playersService.getPlayers().subscribe((players: Player[]) => {
      this.player = players.find(p => p.id === +id);
      setTimeout(() => {
        this.isLoading = false; 
      }, 1000);
    });
  }
}

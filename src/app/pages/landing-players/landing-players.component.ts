import { Component, OnInit } from '@angular/core';
import { PlayersService } from '../../services/players.service';
import { Player } from '../../models/player.interface';

@Component({
  selector: 'app-landing-players',
  templateUrl: './landing-players.component.html',
  styleUrls: ['./landing-players.component.scss']
})
export class LandingPlayersComponent implements OnInit {
  players: Player[] = [];

  constructor(private playersService: PlayersService) { }

  ngOnInit(): void {
    this.getPlayers();
  }

  getPlayers(): void {
    this.playersService.getPlayers().subscribe(
      (players: Player[]) => {
        console.log('Players fetched:', players); 
        if (Array.isArray(players)) {
          this.players = players;
          console.log('Players assigned to this.players:', this.players); 
        } else {
          console.error('Players fetched is not an array:', players);
        }
      },
      (error) => {
        console.error('Error fetching players:', error); 
      }
    );
  }

  getPlayersByPosition(position: string): Player[] {
    console.log('Filtering players by position:', position);
    return this.players.filter((player: Player) => player.position === position);
  }

  scrollToSection(section: string) {
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
  }
}

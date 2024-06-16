import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Player } from '../models/player.interface';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {
  private playersUrl = 'assets/data/players.json'; // Ruta al archivo JSON

  constructor(private http: HttpClient) {}

  getPlayers(): Observable<Player[]> {
    return this.http.get<{ players: Player[] }>(this.playersUrl).pipe(
      map(response => response.players)
    );
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Player } from '../models/player.interface';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class PlayersService {
  private playersUrl = environment.apiUrl; 

  constructor(private http: HttpClient) {}

  getPlayers(): Observable<Player[]> {
    return this.http.get<{ players: Player[] }>(this.playersUrl).pipe(
      map(response => response.players)
    );
  }
}

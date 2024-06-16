import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Goalkeeper } from '../models/goalkeeper.interface';

@Injectable({
  providedIn: 'root'
})
export class GoalkeeperService {
  private goalkeepersUrl = 'assets/data/goalkeepers.json'; // Ruta al archivo JSON

  constructor(private http: HttpClient) {}

  getGoalkeepers(): Observable<Goalkeeper[]> {
    return this.http.get<Goalkeeper[]>(this.goalkeepersUrl);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import 'rxjs/add/operator/map';

import { Game } from './games';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class GameService {

  private gamesUrl = 'http://localhost:8000/api/game/';  // URL to web api

  constructor(
    private http: HttpClient) { }

  getGames(): Observable<Game[]>{
    return this.http.get<Game[]>(this.gamesUrl);

  }
  getGame(id: number): Observable<Game> {
    const url = `${this.gamesUrl}/${id}`;
  return this.http.get<Game>(url);
  }
  updateGame (game: Game): Observable<any> {
  return this.http.put(this.gamesUrl, game, httpOptions);
}

addGame (game: Game): Observable<Game> {
  return this.http.post<Game>(this.gamesUrl, game, httpOptions);
}

deleteGame (game: Game | number): Observable<Game> {
  const id = typeof game === 'number' ? game : game.id;
  const url = `${this.gamesUrl}/${id}`;

  return this.http.delete<Game>(url, httpOptions);
}

searchGames(term: string): Observable<Game[]> {
  if (!term.trim()) {
    return of([]);
  }
  return this.http.get<Game[]>(`api/games/?name=${term}`);
}

}

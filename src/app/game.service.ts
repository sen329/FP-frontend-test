import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import 'rxjs/add/operator/map';
import {  Response, Headers, RequestOptions } from '@angular/http';

import { Game } from './games';

import { Comment } from './comment';
import { AuthService } from './auth.service';


@Injectable()
export class GameService {

  private gamesUrl = 'http://localhost:8000/api/game';  // URL to web api
  private commentUrl = 'http://localhost:8000/api/comment';

  constructor(
    private http: HttpClient,
    private auth: AuthService) { }

  getGames(): Observable<Game[]>{
    return this.http.get<Game[]>(this.gamesUrl, this.auth.getHeader());

  }
  getGame(id: number): Observable<Game> {
    const url = `${this.gamesUrl}/comment/${id}`;
    console.log(this.auth.getHeader());
  return this.http.get<Game>(url, this.auth.getHeader());
  }
  updateGame (game: Game, id: number): Observable<any> {
    const url = `${this.gamesUrl}/comment/${id}`;

    return this.http.put(url,game,this.auth.getHeader());
}

addGame (game: Game): Observable<Game> {
  return this.http.post<Game>(this.gamesUrl, game, this.auth.getHeader());
}

deleteGame (game: Game | number): Observable<Game> {
  const id = typeof game === 'number' ? game : game.id;
  const url = `${this.gamesUrl}/${id}`;

  return this.http.delete<Game>(url, this.auth.getHeader());
}

postComment (id: number, comment: Comment): Observable<any>{
  const url = `${this.gamesUrl}/comment/${id}`;
  let com = JSON.stringify({comment});
  return this.http.post(url,com, this.auth.getHeader());
}

deleteComment (id: number): Observable<any>{
  const url = `${this.commentUrl}/${id}`;
  return this.http.delete(url, this.auth.getHeader());
}

searchGames(term: string): Observable<Game[]> {
  if (!term.trim()) {
    return of([]);
  }
  return this.http.get<Game[]>(`api/games/?name=${term}`);
}

}

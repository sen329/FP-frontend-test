import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import 'rxjs/add/operator/map';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};

@Injectable()
export class UserService {

  private userUrl = 'http://localhost:8000/api/user';

  constructor(
    private http: HttpClient
  ) { }
  getComment(id: number): Observable<any> {
    const url = `${this.userUrl}/comment/${id}`;
    return this.http.get(url);
  }
}

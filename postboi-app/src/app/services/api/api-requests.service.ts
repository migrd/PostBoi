import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiRequestsService {

  constructor(private _http: HttpClient) { }

  getPersonagem(apiUrl: string): Observable<any>{ //simple get
    return this._http.get<any>(apiUrl);
  }
}

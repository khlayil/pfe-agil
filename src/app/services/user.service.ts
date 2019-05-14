import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Users} from '../models/users';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  urlBase = 'http://localhost:8080/OKM_war_exploded/rest/';

  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<Users[]>{
    return this.http.get<Users[]>(this.urlBase + 'authentication');

  }
}

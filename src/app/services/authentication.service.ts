import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  urlBase = 'http://localhost:8080/OKM_war_exploded/rest/';

  constructor(private http: HttpClient) { }
}

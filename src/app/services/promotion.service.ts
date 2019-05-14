import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Promotion} from '../models/promotion';

@Injectable({
  providedIn: 'root'
})
export class PromotionService {
  urlBase = 'http://localhost:8080/OKM_war_exploded/rest/';

  constructor(private http: HttpClient) { }

  getAllPromotions(): Observable<Promotion[]>{
    return this.http.get<Promotion[]>(this.urlBase + 'promotion');

  }
  addPromotion (promotion: Promotion): Observable<Promotion> {
    return this.http.post<Promotion>(this.urlBase + 'promotion', promotion);
  }

  deletePromotion (id){
    return this.http.delete(this.urlBase + 'promotion/'+id);
  }
}

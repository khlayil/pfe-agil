import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Product} from '../models/product';
import {Promotion} from '../models/promotion';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  urlBase = 'http://localhost:8080/OKM_war_exploded/rest/';

  constructor(private http: HttpClient) { }

  getAllProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(this.urlBase + 'product');

  }
  getAllProductsNoPromo(): Observable<Product[]>{
    return this.http.get<Product[]>(this.urlBase + 'product/noPromo');

  }
  getOneProduct(id): Observable<Product>{
    return this.http.get<Product>(this.urlBase + 'product/' + id);

  }

  addProduct (product: Product): Observable<Product> {
    return this.http.post<Product>(this.urlBase + 'product', product);
  }

  editProduct (product: Product): Observable<Product> {
    return this.http.put<Product>(this.urlBase + 'product/'+product.id, product);
  }
  deleteProduct (id){
    return this.http.delete(this.urlBase + 'product/'+id);
  }
}

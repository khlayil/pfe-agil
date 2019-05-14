import { Injectable } from '@angular/core';
import {Promotion} from '../models/promotion';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {FileToUpload} from '../models/fileToUpload';

@Injectable({
  providedIn: 'root'
})
export class UploadService {
  urlBase = 'http://localhost:8080/OKM_war_exploded/rest/';

  constructor(private http: HttpClient) { }

  addImage (file: FileToUpload): Observable<FileToUpload> {
    return this.http.post<FileToUpload>(this.urlBase + 'file',file);
  }
}

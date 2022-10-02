import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Iarticle } from '../ViewModels/iarticle';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  private httpOptions
  constructor(private httpClient:HttpClient) {
    this.httpOptions={
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
   }
 }
 getAllArticles():Observable<Iarticle[]>
  {
    return this.httpClient.get<Iarticle[]>(`${environment.APIBaseURL}/Article`);
   }
  getArticleByID(ID:number):Observable<Iarticle>{
      return this.httpClient.get<Iarticle>(`${environment.APIBaseURL}/Article/${ID}`)
   }
}

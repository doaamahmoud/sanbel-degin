import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { INewsletter } from '../ViewModels/i-newsletter';

@Injectable({
  providedIn: 'root'
})
export class NewsletterService {
  private httpOptions
  constructor(private httpClient:HttpClient) {
    this.httpOptions={
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
   }
   }
   AddNewsLetter(newsletter:INewsletter):Observable<INewsletter>{
    return this.httpClient.post<INewsletter>(`${environment.APIBaseURL}/NewsLetter/AddNewsLetter`,JSON.stringify(newsletter),this.httpOptions); }
    
}

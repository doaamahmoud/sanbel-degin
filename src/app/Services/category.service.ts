import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Category } from '../ViewModels/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private httpClient:HttpClient) { }

  getAllCategories():Observable<Category[]>
  {
    return this.httpClient.get<Category[]>(`${environment.APIBaseURL}/Category/GetAllCategories`);
   }
  getCategoryByID(ID:number):Observable<Category>{
      return this.httpClient.get<Category>(`${environment.APIBaseURL}/Category/GetCategoryByID/${ID}`)
   }
}

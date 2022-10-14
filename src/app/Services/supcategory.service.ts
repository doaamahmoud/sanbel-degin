import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ISupCategory } from '../ViewModels/i-sup-category';

@Injectable({
  providedIn: 'root'
})
export class SupcategoryService {

  constructor(private httpClient:HttpClient) { }
  getSupCategoriesByCategoryID(ID:number):Observable<ISupCategory[]>{
    return this.httpClient.get<ISupCategory[]>(`${environment.APIBaseURL}/SupCategory/GetSupCategoriesByCategorID?CatID=${ID}`)
 }
}

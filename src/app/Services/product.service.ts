import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { IProduct } from '../ViewModels/i-product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient:HttpClient) { }
  getProductsBySupCategoryID(ID:number):Observable<IProduct[]>{
    return this.httpClient.get<IProduct[]>(`${environment.APIBaseURL}/Product/GetProductBySupCategorID?SupCatID=${ID}`)
 }
}

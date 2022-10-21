import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Branch } from '../ViewModels/branch';

@Injectable({
  providedIn: 'root'
})
export class IbranchService {

  constructor(private httpClient:HttpClient) { }
  getAllBranches():Observable<Branch[]>
  {
    return this.httpClient.get<Branch[]>(`${environment.APIBaseURL}/Branch/GetAllBranches`);
   }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IEmployee } from '../ViewModels/iemployee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private httpClient:HttpClient) { }
  getAllArticles():Observable<IEmployee[]>
  {
    return this.httpClient.get<IEmployee[]>(`${environment.APIBaseURL}/Employee/GetAllEmployees`);
   }
}

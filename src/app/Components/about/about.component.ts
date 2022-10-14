import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { EmployeeService } from 'src/app/Services/employee.service';
import { IEmployee } from 'src/app/ViewModels/iemployee';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
EmployeesList:IEmployee[];
  constructor(private EmployeeService:EmployeeService, private San:DomSanitizer) {
    this.EmployeesList=[];
   }

  ngOnInit(): void {
    this.EmployeeService.getAllArticles().subscribe(data=>{
      this.EmployeesList=data;
      this.EmployeesList.forEach(element => {
        element.url=this.San.bypassSecurityTrustUrl('data:image/png;base64,'+element.image)
      });
    })
  }

}

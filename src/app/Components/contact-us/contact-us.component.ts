import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IbranchService } from 'src/app/Services/ibranch.service';
import { Branch } from 'src/app/ViewModels/branch';
import { INewsletter } from 'src/app/ViewModels/i-newsletter';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUSComponent implements OnInit {
  newLetter:INewsletter={} as INewsletter;
  BranchList: Branch[];
  constructor(private BranchService:IbranchService, private httpClint:HttpClient, ) { 
    this.BranchList=[];
  }

  ngOnInit(): void {
    this.BranchService.getAllBranches().subscribe(data=>{
      this.BranchList=data;  
    })
  }
  SendContact(data:{name:string, email:string}){
    // console.log(data);
    // this.newLetter.name=data.name;
    // this.newLetter.email=data.email;
    // this.NewsLetterService.AddNewsLetter(this.newLetter).subscribe(prd=>{
    //  console.log(prd);
  // })
  }
}

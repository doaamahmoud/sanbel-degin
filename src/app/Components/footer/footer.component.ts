import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewsletterService } from 'src/app/Services/newsletter.service';
import { INewsletter } from 'src/app/ViewModels/i-newsletter';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  newLetter:INewsletter={} as INewsletter;
  errortext:string;
  constructor(private NewsLetterService:NewsletterService, private router:Router, private httpClient:HttpClient) { 
         this.errortext="";
  }

  ngOnInit(): void {
  
  }
  SaveLetter(data:{name:string, email:string}){
    // console.log(data);
    this.newLetter.name=data.name;
    this.newLetter.email=data.email;
    this.NewsLetterService.AddNewsLetter(this.newLetter).subscribe(prd=>{
     console.log(prd);
  })
 }
}
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ArticleService } from 'src/app/Services/article.service';
import { Iarticle } from 'src/app/ViewModels/iarticle';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  ArticleList:Iarticle[];
  Articles:Iarticle[];
  constructor(private ArticleService:ArticleService ,private San:DomSanitizer,) { 
    this.ArticleList=[];
    this.Articles=[];

  }

  ngOnInit(): void {
    this.ArticleService.getAllArticles().subscribe(data=>{
      console.log(data);
      this.ArticleList=data;
      this.ArticleList.forEach(element => {
        element.url=this.San.bypassSecurityTrustUrl('data:image/png;base64,'+element.image)
      });
    })
  }
 

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleService } from 'src/app/Services/article.service';
import { Iarticle } from 'src/app/ViewModels/iarticle';
import { Location } from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.scss']
})
export class ArticleDetailsComponent implements OnInit {

  private  ArticleID:number=0;
  ArticleItem: Iarticle={} as Iarticle;
  private  ProIdList:number[]=[];
  ArticleList:Iarticle[];
  constructor(private articleService:ArticleService, private activateRoute:ActivatedRoute, private location:Location, private router:Router, private San:DomSanitizer) {
  this.ArticleList=[];
  }

  ngOnInit(): void {
    this.articleService.getAllArticles().subscribe(data=>{
      this.ArticleList=data;
      this.ArticleList.forEach(element => {
        element.url=this.San.bypassSecurityTrustUrl('data:image/png;base64,'+element.image)
      });
     
    })
    this.activateRoute.paramMap.subscribe(paramMap=>{
      this.ArticleID= Number(paramMap.get("Aid"));
      this.articleService.getArticleByID(this.ArticleID).subscribe(data=>{
        this.ArticleItem=data;      
          this.ArticleItem.url=this.San.bypassSecurityTrustUrl('data:image/png;base64,'+this.ArticleItem.image);
      })
    });
     this.ProIdList=this.GetArticle_IdList();
    
     
  }
  GetArticle_IdList():number[]{
    return this.ArticleList.map(p=>p.id);
 }
    goBack()
    {
      this.location.back();
    }


}
